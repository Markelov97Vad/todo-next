import { useDeleteTodoMutation, useGetTodosQuery, useToggleStatusTodoMutation } from '@/app/store/todos/reducer'
import styles from './TodoList.module.css'
import { useEffect} from 'react'
import TrashIcon from '../icons/TrashIcon'
import Link from 'next/link'
import { useAppSelector } from '@/app/hooks/redux'

type TodoListProps = {
  data: {
    id?: number
    text?: string
    completed?: boolean
  }
}

function TodoList({data} : TodoListProps ) {
  const [toggleStatus, {isSuccess , isLoading}] = useToggleStatusTodoMutation();
  const [deleteTodo,{ isSuccess: isSuccessDelete, isLoading: isLoadingDelete}] = useDeleteTodoMutation();
  const { refetch } = useGetTodosQuery("");
  const { searchData } = useAppSelector(state => state.todo);

  const handleChange = () => {
    toggleStatus({
      id: data?.id,
      completed: !data?.completed
    })
  }

  const handleDelete = () => {
    deleteTodo(data?.id as number);
  }

  useEffect(() => {
    if (isSuccess || isSuccessDelete) {
      refetch();
    }
  }, [isLoading, isLoadingDelete]);

  return (
    <li
      className={`list-group-item ${styles.todoList}`}
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div className={styles.todoList__wrapper}>
        <input
          className={`form-check-input ${styles.todoList__input}`}
          type="checkbox"
          name="checkbox"
          checked={data.completed}
          onChange={handleChange}
        />
        <Link href={`/aboutTodo/${data?.id}`} className={styles['todoList__text']}>
          {data?.text}
        </Link>
      </div>
      <button onClick={handleDelete} type='button' className={styles['todoList__button-trash']}>
        <TrashIcon/>
      </button>
    </li>
  );
}

export default TodoList;
