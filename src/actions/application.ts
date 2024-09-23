"use server";
import { db } from "@/firebase";
import { collection, orderBy, query, getDocs } from "firebase/firestore";

export const getDownloadLinks = async () => {
  const q = query(
    collection(db, "windows-applications"),
    orderBy("versionCode", "desc")
  );

  const macQ = query(
    collection(db, "mac-applications"),
    orderBy("versionCode", "desc")
  );

  const windowsSnapshot = await getDocs(q);
  const macSnapshot = await getDocs(macQ);

  const windowsLatest = windowsSnapshot.docs[0].data().download_url;

  const macAlt =
    "https://firebasestorage.googleapis.com/v0/b/witpro-e38b9.appspot.com/o/executables%2Fwit-pro-0.9.5-arm64.dmg?alt=media&token=a03e1b5a-9668-44a2-a2ef-875039f10704";

  return {
    windows: windowsLatest,
    mac:
      macSnapshot.docs.length === 0
        ? macAlt
        : macSnapshot.docs[0].data().download_url,
  };
};
