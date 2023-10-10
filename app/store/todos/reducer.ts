import { TodoType } from '@/app/types/todo.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

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
    toggleStatusTodo: build.mutation<TodoType, TodoType>({
      query: ({id, completed}) => ({
        url: `/todo/${id}`,
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          completed: completed
        })
      })
    }),
    deleteTodo: build.mutation<TodoType[], string>({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      })
    }) 
  })
})

export const { 
  useGetTodosQuery,
  useLazyGetTodosQuery,
  useToggleStatusTodoMutation,
  useDeleteTodoMutation,
} = todosApi;