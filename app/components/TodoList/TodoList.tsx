import { useDeleteTodoMutation, useToggleStatusTodoMutation } from '@/app/store/todos/reducer'
import styles from './TodoList.module.css'
import { useEffect} from 'react'

type TodoListProps = {
  data: {
    id: number
    text?: string
    completed: boolean
  },
  refetch: any
}


function TodoList({data , refetch} : TodoListProps ) {
  const [toggleStatus, {isSuccess , isLoading}] = useToggleStatusTodoMutation();

  const handleChange = () => {
    toggleStatus({
      id: data?.id,
      completed: !data?.completed
    })
  }

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isLoading]);

  return (
    <li
      className={`list-group-item ${styles.todoList}`}
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <input
        className={`form-check-input ${styles.todoList__input}`}
        type="checkbox"
        name="checkbox"
        checked={data.completed}
        onChange={handleChange}
      />
      <p className={styles['todoList__text']}>{data?.text}</p>
    </li>
  );
}

export default TodoList;
