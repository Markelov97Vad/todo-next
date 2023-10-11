export type TodoType = {
  id?: number;
  date?: string;
  text?: string;
  completed?: boolean;
}

export type SearchDataType = {
  keyword: string;
  todos: TodoType[]
}

export type dataType = {
  name: string;
  location: string
}

export type inputValueType = {
  search?: string;
  add?: string;
  edit?: string;
};