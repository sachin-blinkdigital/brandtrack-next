import useSWR from "swr";

export default function useFetch(url, options) {
  const fetcher = (url) => fetch(url, options).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  return {
    response: data,
    isLoading: !error && !data,
    isError: error,
  };
}
