'use client'
import TodoList from "@/app/components/TodoList/TodoList";
import { useAppSelector } from "@/app/hooks/redux";
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
  const { data, refetch } = useGetTodosQuery('');
  const { searchData } = useAppSelector(state => state.todo);
  return (
    <>
      {searchData?.map((todo, i) => {
        const activeTodos = !todo.completed
        return (
          activeTodos && <TodoList key={i} data={todo} refetch={refetch} />
        )
      })}

    </>
  );
}

export default Active;