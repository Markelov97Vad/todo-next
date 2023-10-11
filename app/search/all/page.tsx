"use client";
import TodoList from "@/app/components/TodoList/TodoList";
import { useAppSelector } from "@/app/hooks/redux";

function All() {
  const { searchData } = useAppSelector((state) => state.todo);
  return (
    <>
      {searchData?.length > 0 ? (
        searchData?.map((todo, i) => <TodoList key={i} data={todo} />)
      ) : (
        <span>To do are missing.</span>
      )}
    </>
  );
}

export default All;
