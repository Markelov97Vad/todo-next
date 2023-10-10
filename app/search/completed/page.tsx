'use client'
import TodoList from "@/app/components/TodoList/TodoList";
import { useAppSelector } from "@/app/hooks/redux";
import { useGetTodosQuery } from "@/app/store/todos/reducer";

function Completed() {
  const { refetch } = useGetTodosQuery('');
  const { searchData } = useAppSelector(state => state.todo);
  return (
    <>
      {searchData?.map((todo, i) => {
        const completedTodos = todo.completed
        return (
          completedTodos && <TodoList key={i} data={todo} refetch={refetch}/>
        )
      })}
    </>
  );
}

export default Completed;
