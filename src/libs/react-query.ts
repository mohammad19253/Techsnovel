import { AxiosError } from "axios";
import {
  QueryClient,
  DefaultOptions,
  UseMutationOptions,
} from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: 3,
    staleTime: 5000,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

type Error = {
  data: null;
  error: {
    status: string; // HTTP status
    message: string; // A human readable error message
  };
};
export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<any, AxiosError<Error>, Parameters<MutationFnType>[0]>;
