import styles from './TodoList.module.css'

function TodoList({text} : {text : string} ) {
  return (
    <li
      className={`list-group-item ${styles.todoList}`}
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <input
        className={`form-check-input ${styles.todoList__input}`}
        type="checkbox"
        value=""
        aria-label="..."
        checked
      />
      <p className={styles['todoList__text']}>{text}</p>
    </li>
  );
}

export default TodoList;
