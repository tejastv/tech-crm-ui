import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from "@tanstack/react-query";

// interface RequestProcessorOptions {
//     queryKey: any;
//     queryFn: any;
//     options?: any;
//   }

interface MutateOptions {
  mutationKey: any;
  mutationFn: any;
  options?: UseMutationOptions<any, unknown, any, any>;
}

export const useRequestProcessor = () => {
  const queryClient = useQueryClient();

  function query<TData>(key: any, queryFunction: any) {
    return useQuery<TData>({
      queryKey: [key],
      queryFn: queryFunction,
    });
  }

  const mutate = (key: any, mutationFunction: any, options: MutateOptions) => {
    const { mutationKey, ...mutationOptions } = options;
    return useMutation(
      (mutationVariables) => mutationFunction(mutationVariables),
      {
        ...mutationOptions,
        onSuccess: async () => {
          queryClient.invalidateQueries({ queryKey: [key] });
        },
        ...options,
      }
    );
  };

  return { query, mutate };
};
