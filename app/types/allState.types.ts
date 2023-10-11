import { TodoType } from "./all.types";

export type todoState = {
  searchData: TodoType[];
  loading: boolean;
  isModifided: boolean;
  error: string | null;
};
