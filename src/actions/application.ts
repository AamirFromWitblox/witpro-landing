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

  const windowsLatest = windowsSnapshot.docs[0].data();

  const macLatest = macSnapshot.docs[0].data();

  return {
    windows: {
      url: windowsLatest.download_url as string,
      version: windowsLatest.version as string,
    },
    mac: {
      url: macLatest.download_url as string,
      version: macLatest.version as string,
    },
  };
};
