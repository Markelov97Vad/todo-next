import { TodoType } from "@/app/types/todo.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editTodo } from "./todoApi";
import { stat } from "fs";

type todoState = {
  searchData: TodoType[],
  loading: boolean,
  isModifided: boolean,
  error: string | null
}

type SearchDataType = {
  keyword: string;
  todos: TodoType[]
}

const initialState : todoState = {
  // keword: JSON.parse(localStorage.getItem() ?? '[]')
  searchData: [],
  loading: false,
  isModifided: false,
  error: null
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    searchTodos(state, action: PayloadAction<SearchDataType>) {
      // if (action.payload.keyword.length > 0) {
        // const newTodo = action.payload.todos?.filter(todo => {
        //   return todo.text?.toLowerCase().includes(action.payload.keyword.toLowerCase())
        // });
        console.log(action);
        if (action.payload.keyword?.length > 0) {
          state.searchData = action.payload.todos?.filter(todo => {
            return todo.text?.toLowerCase().includes(action.payload.keyword.toLowerCase())
          });
          sessionStorage.setItem('keywords', action.payload.keyword)
        } else {
          const keywords = sessionStorage.getItem('keywords')!;
          console.log('Keywords',keywords);
          
          if (!keywords) {
            state.searchData = action.payload.todos
          } else {
            console.log('last');
            console.log(keywords);
            console.log(action.payload.todos);
            
            
            state.searchData = action.payload.todos?.filter(todo => {
              return todo.text?.toLowerCase().includes(keywords.toLowerCase())
            });
            console.log(state.searchData);
            
            // sessionStorage.removeItem('keywords')
          }
          // state.searchData = action.payload.todos
        }
        
      // } 
      // localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    toggleModifided(state, action: PayloadAction<boolean>) {
      state.isModifided = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(editTodo.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.loading = false,
        state.error = null,
        state.isModifided = false
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload as string,
        state.isModifided = true
      })
  }
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer