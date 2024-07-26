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
    "https://firebasestorage.googleapis.com/v0/b/witblox-5ae68.appspot.com/o/wit-pro%2Fwit-pro-0.9.8.dmg?alt=media&token=10a1eb6d-0951-4458-895b-d33c8cba3a74";

  return {
    windows: windowsLatest,
    mac:
      macSnapshot.docs.length === 0
        ? macAlt
        : macSnapshot.docs[0].data().download_url,
  };
};
