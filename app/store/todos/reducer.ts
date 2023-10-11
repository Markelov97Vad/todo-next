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
    addTodo: build.mutation<TodoType, TodoType>({
      query: ({text, completed, date}) => ({
        url: `/todo`,
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          date,
          text,
          completed
        })
      })
    }),
    getCurrentTodo: build.query<TodoType, string>({
      query: (id) => ({
        url: `/todo/${id}`,
        headers: {"Content-type": "application/json"},
      })
    }),
    toggleStatusTodo: build.mutation<TodoType, TodoType>({
      query: ({id, completed}) => ({
        url: `/todo/${id}`,
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          completed
        })
      })
    }),
    editTodo: build.mutation<TodoType, TodoType>({
      query: ({id, text}) => ({
        url: `/todo/${id}`,
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          text
        })
      })
    }),
    deleteTodo: build.mutation<TodoType[], number>({
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
  useAddTodoMutation,
  useGetCurrentTodoQuery,
  useLazyGetCurrentTodoQuery,
  useToggleStatusTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = todosApi;