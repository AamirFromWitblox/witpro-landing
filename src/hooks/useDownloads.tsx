import { getDownloadLinks } from "@/actions/application";
import useSWR from "swr";

const fetcher = async () => {
  return getDownloadLinks();
};

export function useDownloads() {
  const { data, error, isLoading } = useSWR("downloads", fetcher);

  return {
    dowloads: data,
    isLoading,
    error: error,
  };
}
