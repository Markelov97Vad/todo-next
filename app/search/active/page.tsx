'use client'
import TodoList from "@/app/components/TodoList/TodoList";
import { useGetTodosQuery } from "@/app/store/todos/reducer";

const todoData = [
  {
    text: 'Dapibus ac facilisis in'
  },
  {
    text: 'Morbi leo risus'
  },
]

function Active() {
  const { data } = useGetTodosQuery('');
  return (
    <>
      {data?.map((todo, i) => {
        const activeTodos = !todo.completed
        return (
          activeTodos && <TodoList key={i} text={todo.text} />
        )
      })}

    </>
  );
}

export default Active;