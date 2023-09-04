import { useCallback, useReducer } from "react";
import axios, { isAxiosError } from "api/useAxios/axios";
import {defaultState, mutationReducer} from './mutationRecucer'
import { UseMutationProps } from "./useMutation.types";

export const useMutation = <T extends unknown, R extends unknown>({
  mutateFn,
  onSuccess,
}: UseMutationProps<T, R>) => {
  const [state, dispatch] = useReducer(mutationReducer, defaultState);

  const onMutate = useCallback(
    async (payload: T) => {
      try {
        dispatch({ type: 'init' });
        const res = await mutateFn(axios)(payload);
        if(onSuccess) onSuccess(res);
      } catch (error) {
        if(isAxiosError(error) && error.response?.status === 401) {
          dispatch({
            type: 'error', 
            payload: 'You are not authorized',
          });
          return;
        }
        dispatch({
          type: 'error', 
          payload: 'Something went wrong. Try again',
        });
      } finally {
        dispatch({
          type: 'finish',
        });
      }
    }, 
    [mutateFn, onSuccess],
  )

  return { onMutate, state };
};
