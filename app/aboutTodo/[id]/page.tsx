"use client";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetCurrentTodoQuery,
  useLazyGetCurrentTodoQuery,
} from "@/app/store/todos/reducer";
import styles from "./page.module.css";
import Form from "@/app/components/Form/SearchForm";
import { useEffect, useState } from "react";
import TrashIcon from "@/app/components/icons/TrashIcon";
import PenIcon from "@/app/components/icons/PenIcon";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { useActions } from "@/app/hooks/actions";

function Todo({ params }: { params: { id: string } }) {
  // const { data } = useGetCurrentTodoQuery(params.id);
  const [getCurrentTodo, { data }] = useLazyGetCurrentTodoQuery();
  // const [isModifided, setIsModifided] = useState(false);
  const dispatch = useAppDispatch();
  const { toggleModifided } = useActions();
  const { isModifided } = useAppSelector((state) => state.todo);
  const [_, { isSuccess: isSuccessEdit, data: DataEdit }] =
    useEditTodoMutation();
  const [deleteTodo, { isSuccess }] = useDeleteTodoMutation();
  const router = useRouter();

  // useEffect(() => {
  //   // getCurrentTodo(params.id);
  // }, [toggleModifided]);
  useEffect(() => {
    getCurrentTodo(params.id);
  }, [isModifided]);

  useEffect(() => {
    console.log(isSuccessEdit);
    console.log(DataEdit);

    if (isSuccessEdit) {
      console.log(isSuccessEdit);
      // setIsModifided(false)
    }
  }, [isSuccessEdit, DataEdit]);

  useEffect(() => {
    if (isSuccess) {
      router.replace("/add");
    }
  }, [isSuccess]);

  const handleModifited = () => {
    // dispatch()
    toggleModifided(!isModifided);
    // setIsModifided(!isModifided);
  };

  const handleDelete = () => {
    deleteTodo(Number(params.id));
  };

  // console.log(params);

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
