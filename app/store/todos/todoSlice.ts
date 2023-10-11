import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editTodo } from "./todoApi";
import { todoState } from "@/app/types/allState.types";
import { SearchDataType } from "@/app/types/all.types";

const initialState : todoState = {
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
        if (action.payload.keyword?.length > 0) {
          state.searchData = action.payload.todos?.filter(todo => {
            return todo.text?.toLowerCase().includes(action.payload.keyword.toLowerCase())
          });
          sessionStorage.setItem('keywords', action.payload.keyword)
        } else {
          const keywords = sessionStorage.getItem('keywords')!;
          if (!keywords) {
            state.searchData = action.payload.todos
          } else {
            state.searchData = action.payload.todos?.filter(todo => {
              return todo.text?.toLowerCase().includes(keywords.toLowerCase())
            });
          }
        }
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
      .addCase(editTodo.fulfilled, (state) => {
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
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;