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
  const { searchData } = useAppSelector(state => state.todo);
  return (
    <>
      {searchData?.length > 0 ? searchData?.map((todo, i) => {
        const activeTodos = !todo.completed
        return ( 
            activeTodos && <TodoList key={i} data={todo} /> 
            // <span>To do are missing.</span>
        )
      }) : <span>To do are missing.</span>
    }

    </>
  );
}

export default Active;