"use client";
import TodoList from "@/app/components/TodoList/TodoList";
import { useAppSelector } from "@/app/hooks/redux";
import { useGetTodosQuery } from "@/app/store/todos/reducer";

function All() {
  const { refetch } = useGetTodosQuery("");
  const { searchData } = useAppSelector(state => state.todo);

  return (
    <>
      {searchData?.map((todo, i) => (
        <TodoList key={i} data={todo} refetch={refetch} />
      ))}
    </>
  );
}

export default All;
