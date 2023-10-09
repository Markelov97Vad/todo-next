import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

type TodoType = {
  text: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'api/todo',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4000`,
  }),
  endpoints: (build) => ({
    getTodos: build.query<TodoType[], string>({
      query: () => ({
        url: `/todo`
      })
    }),
    deleteTodos: build.mutation<TodoType[], string>({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      })
    }) 
  })
})

export const { 
  useGetTodosQuery,
  useDeleteTodosMutation,
} = todosApi;