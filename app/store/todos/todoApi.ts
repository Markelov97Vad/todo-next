import { TodoType } from "@/app/types/todo.type";
import { API } from "@/app/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editTodo = createAsyncThunk<TodoType, TodoType, { rejectValue: string }>(
  'api/todo/edit',
  async (data,{ rejectWithValue }) => {
    try {
      const response: Response = await fetch(
        `${API.baseUrl}${API.endpoints.todo}/${data.id}`,
        {
          method: "PATCH",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            text: data.text
          })
        }
      );
      if (!response.ok) {
        return await Promise.reject(new Error(`Status ${response.status}`));
      }
      return (await response.json()) as TodoType;
    } catch(err) {
      return rejectWithValue(`Ошибка при изменении todo ${err}`);
    }
  }
)