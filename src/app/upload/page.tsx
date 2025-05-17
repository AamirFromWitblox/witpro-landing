"use client";
import CircularProgressBar from "@/components/circular-progress-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTask,
} from "firebase/storage";
import { storage, db } from "@/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const PASSWORD = "apnatimeayega";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState("");
  const uploadTaskRef = useRef<UploadTask | null>(null);

  useEffect(() => {
    const storedPass = localStorage.getItem("p");
    if (!storedPass || storedPass !== PASSWORD) {
      const pass = prompt("Enter password");
      if (pass !== PASSWORD) {
        window.location.href = "/";
      }

      localStorage.setItem("p", pass!);
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    setUploadError("");
    setUploadProgress(0);
    setFile(file);

    if (!parseVersion(file.name)) {
      setFile(null);
      setUploadError(
        "Invalid file name format. Please use <app-name>-<version>.exe"
      );
      return;
    }

    const storageRef = ref(storage, `executables/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTaskRef.current = uploadTask;

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.log(error);
        setFile(null);
        if (error.code === "storage/canceled") return;
        setUploadError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveUrlToDatabase(downloadURL, uploadTask.snapshot.ref.name);
        });
      }
    );
  };

  const saveUrlToDatabase = async (downloadURL: string, fileName: string) => {
    if (!fileName) return;
    const appVersion = parseVersion(fileName);
    const platform = getPlatformFromFileName(fileName);

    if (!appVersion) return;
    if (!platform) {
      setUploadError(
        "Invalid file type. Please upload .exe or .dmg files only."
      );
      return;
    }

    const docRef = doc(db, `${platform}-applications`, appVersion);
    try {
      await setDoc(docRef, {
        download_url: downloadURL,
        file_name: fileName,
        created_at: serverTimestamp(),
        version: appVersion,
        versionCode: parseInt(appVersion.replace(/\./g, "")),
      });

      setFile(null);
      alert("File uploaded successfully!");
    } catch (e) {
      console.log(e);
    }
  };

  const parseVersion = (fileName: string) => {
    const version = fileName.match(/\d+\.\d+\.\d+/)?.[0];
    return version;
  };

  const getPlatformFromFileName = (fileName: string) => {
    const platformName = prompt(
      "What is the platform name? [windows, mac]",
      "windows"
    );
    return platformName;
    // if (fileName.endsWith(".exe")) return "windows";
    // if (fileName.endsWith(".dmg")) return "mac";
    // return "";
  };

  const handleUploadCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isConfirm = confirm("Are you sure you want to cancel the upload?");
    if (!isConfirm) return;
    if (uploadTaskRef.current) {
      uploadTaskRef.current.cancel();
      setFile(null);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <label
        htmlFor="file-uploader"
        className="flex min-h-72 w-1/2 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-400 p-5 text-center transition-colors hover:bg-gray-300"
      >
        {file ? (
          <>
            <CircularProgressBar percentage={uploadProgress} />
            <h4 className="font-semibold">{file.name}</h4>
            {/* <h6 className="text-sm">Version: {parseVersion(file.name)}</h6> */}
            <h6 className="text-sm">
              {(file.size / 1024 / 1024).toFixed(0)} MB
            </h6>
            {uploadProgress !== 100 && (
              <button
                onClick={handleUploadCancel}
                className="mt-2 rounded-md bg-red-500 px-4 py-2 text-white"
              >
                Cancel upload
              </button>
            )}
          </>
        ) : (
          <>
            {!uploadError ? (
              <>
                <h4 className="font-semibold">
                  Click to upload or drag and drop
                </h4>
                <p>Allowed file types: .exe, .dmg</p>
              </>
            ) : (
              <h4 className="font-semibold text-red-500">{uploadError}</h4>
            )}
          </>
        )}
      </label>
      <input
        type="file"
        id="file-uploader"
        hidden
        accept=".exe,.dmg"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          handleFileUpload(file);
        }}
      />
    </main>
  );
};

export default Upload;
