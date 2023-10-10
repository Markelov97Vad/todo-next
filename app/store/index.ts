"use client";
import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./todos/reducer";
import { todoReducer } from "./todos/todoSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    todo: todoReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;