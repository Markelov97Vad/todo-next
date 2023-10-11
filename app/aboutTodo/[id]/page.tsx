"use client";
import {
  useDeleteTodoMutation,
  useLazyGetCurrentTodoQuery,
} from "@/app/store/todos/reducer";
import styles from "./page.module.css";
import Form from "@/app/components/Form/SearchForm";
import { useEffect } from "react";
import TrashIcon from "@/app/components/icons/TrashIcon";
import PenIcon from "@/app/components/icons/PenIcon";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/hooks/redux";
import { useActions } from "@/app/hooks/actions";

function Todo({ params }: { params: { id: string } }) {
  const [getCurrentTodo, { data }] = useLazyGetCurrentTodoQuery();
  const { toggleModifided } = useActions();
  const { isModifided } = useAppSelector((state) => state.todo);
  const [deleteTodo, { isSuccess }] = useDeleteTodoMutation();
  const router = useRouter();
  useEffect(() => {
    getCurrentTodo(params.id);
  }, [isModifided]);

  useEffect(() => {
    if (isSuccess) {
      router.replace("/add");
    }
  }, [isSuccess]);

  const handleModifited = () => {
    toggleModifided(!isModifided);
  };

  const handleDelete = () => {
    deleteTodo(Number(params.id));
  };

  return (
    <article>
      <div className={styles.todo__wrapper}>
        <h1 className={styles.todo__title}>About todo</h1>
        <div>
          <button
            onClick={handleModifited}
            className={styles.todo__button}
            type="button"
          >
            <PenIcon />
          </button>
          <button
            onClick={handleDelete}
            className={styles.todo__button}
            type="button"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      <p className={styles.todo__date}>
        Date: <span className={styles.todo__info}>{data?.date}</span>
      </p>
      {isModifided ? (
        <Form id={params.id} text={data?.text}/>
      ) : (
        <p className={styles.todo__text}>{data?.text}</p>
      )}
      <p className={styles["todo__status"]}>
        Status:{" "}
        <span className={styles.todo__status_type_value}>
          {data?.completed ? "Completed" : "Active"}
        </span>
      </p>
    </article>
  );
}

export default Todo;
