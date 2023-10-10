import { TodoType } from "@/app/types/todo.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todoState = {
  searchData: TodoType[]
}

type sds = {
  keyword: string;
  todos: TodoType[]
}

const initialState : todoState = {
  // keword: JSON.parse(localStorage.getItem() ?? '[]')
  searchData: []
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    searchTodos(state, action: PayloadAction<sds>) {
      // if (action.payload.keyword.length > 0) {
        // const newTodo = action.payload.todos?.filter(todo => {
        //   return todo.text?.toLowerCase().includes(action.payload.keyword.toLowerCase())
        // });
        console.log(action);
        if (action.payload.keyword.length > 0) {
          state.searchData = action.payload.todos?.filter(todo => {
            return todo.text?.toLowerCase().includes(action.payload.keyword.toLowerCase())
          });
        } else {
          state.searchData = action.payload.todos
        }
        
      // } 
      // localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    // removeFavourite(state, action: PayloadAction<string>) {
    //   state.favourites = state.favourites.filter(f => f !== action.payload)
    //   localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    // }
  }
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer