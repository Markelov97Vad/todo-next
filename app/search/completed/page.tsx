'use client'
import TodoList from "@/app/components/TodoList/TodoList";
import { useGetTodosQuery } from "@/app/store/todos/reducer";
import { useEffect } from "react";

const todoData = [
  {
    text: "Dapibus ac facilisis in",
  },
  {
    text: "Morbi leo risus",
  },
];

function Completed() {
  const { data } = useGetTodosQuery('');

  useEffect(() => {
    console.log(data);
    
  }, [data]);
  return (
    <>
      {data?.map((todo, i) => {
        const completedTodos = todo.completed
        return (
          completedTodos && <TodoList key={i} text={todo.text} />
        )
      })}
    </>
  );
}

export default Completed;
