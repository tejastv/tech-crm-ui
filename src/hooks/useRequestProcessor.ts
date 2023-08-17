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

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function query<TData>(key: any, queryFunction: any) {
    return useQuery<TData>({
      queryKey: [key],
      queryFn: queryFunction,
    });
  }

  function mutate<TData>(
    key: any,
    mutationFunction: any,
    options: MutateOptions
  ) {
    const { mutationKey, ...mutationOptions } = options;
    return useMutation<TData, unknown, any, any>(
      (mutationVariables) => mutationFunction(mutationVariables),
      {
        ...mutationOptions,
        onSuccess: async () => {
          queryClient.invalidateQueries({ queryKey: [key] });
        },
        ...options,
      }
    );
  }

  return { query, mutate };
}
