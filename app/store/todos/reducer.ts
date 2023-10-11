import { TodoType } from "@/app/types/all.types";
import { API } from "@/app/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const todosApi = createApi({
  reducerPath: "api/todo",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API.baseUrl}`,
  }),
  endpoints: (build) => ({
    getTodos: build.query<TodoType[], string>({
      query: () => ({
        url: `${API.endpoints.todo}`,
        headers: { "Content-type": "application/json" },
      }),
    }),
    addTodo: build.mutation<TodoType, TodoType>({
      query: ({ text, completed, date }) => ({
        url: `${API.endpoints.todo}`,
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          date,
          text,
          completed,
        }),
      }),
    }),
    getCurrentTodo: build.query<TodoType, string>({
      query: (id) => ({
        url: `${API.endpoints.todo}/${id}`,
        headers: { "Content-type": "application/json" },
      }),
    }),
    toggleStatusTodo: build.mutation<TodoType, TodoType>({
      query: ({ id, completed }) => ({
        url: `${API.endpoints.todo}/${id}`,
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed,
        }),
      }),
    }),
    deleteTodo: build.mutation<TodoType[], number>({
      query: (id) => ({
        url: `${API.endpoints.todo}/${id}`,
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useLazyGetTodosQuery,
  useAddTodoMutation,
  useGetCurrentTodoQuery,
  useLazyGetCurrentTodoQuery,
  useToggleStatusTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
