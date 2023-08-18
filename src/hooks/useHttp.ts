import { UseQueryResult } from "@tanstack/react-query";
import { useAxios, useRequestProcessor } from ".";

export const useHttp = () => {
  const { instance } = useAxios();
  const { query } = useRequestProcessor();

  const getData = (key: string, url: string): UseQueryResult => {
    return query(key, instance.get(url));
  };

  return { getData };
};
