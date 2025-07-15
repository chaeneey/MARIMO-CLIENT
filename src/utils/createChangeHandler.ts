import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const createChangeHandler =
  <T>(setState: Dispatch<SetStateAction<T>>) =>
  <K extends keyof T>(key: K) =>
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value as T[K];
    setState((prev) => ({ ...prev, [key]: value }));
  };
