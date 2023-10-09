"use client";
import TodoList from "@/app/components/TodoList/TodoList";
import { Providers } from "@/app/store/provider";
import { useGetTodosQuery } from "@/app/store/todos/reducer";

const todoData = [
  {
    text: 'Dapibus ac facilisis in'
  },
  {
    text: 'Morbi leo risus'
  },
]

function All() {
  const { data } = useGetTodosQuery('');
  return (
    <>
      {

        data?.map((todo, i) => (
          <TodoList key={i} text={todo.text}/> 
        ))
      }
    </>
          
  );
}

export default All;