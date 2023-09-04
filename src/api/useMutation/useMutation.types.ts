import { AxiosInstance } from "axios";

export type UseMutationProps<T, R> = {
  mutateFn: (axios: AxiosInstance) => (arg: T) => Promise<R>;
  onSuccess?: (arg: R) => void;
}

export type MutationState =
  | {
    isLoading: true;
    errorMessage: undefined;
  }
  | {
    isLoading: false;
    errorMessage: string | undefined;
  };

export type InitAction = { type: 'init' };
export type ErrorAction = { type: 'error'; payload: string };
export type FinishAction = { type: 'finish' };
export type MutationAction = InitAction | ErrorAction | FinishAction;