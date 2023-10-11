"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./SearchForm.module.css";
import {
  useAddTodoMutation,
  useGetTodosQuery,
} from "@/app/store/todos/reducer";
import { useActions } from "@/app/hooks/actions";
import { useAppDispatch } from "@/app/hooks/redux";
import { editTodo } from "@/app/store/todos/todoApi";
import { TodoType, inputValueType } from "@/app/types/all.types";

function Form({ id, text }: { id?: string; text?: string }) {
  const [inputValue, setInputValue] = useState<inputValueType | null>(null);
  const { data, refetch } = useGetTodosQuery("");
  const [addNewTodo, { isSuccess }] = useAddTodoMutation();
  const { searchTodos } = useActions();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isSearchForm = pathname.includes("search");
  const isAddForm = pathname.includes("add");
  const isTodoForm = pathname.includes("aboutTodo");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setInputValue((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const resetFormValues = useCallback(
    (newValue: inputValueType) => {
      setInputValue(newValue);
    },
    [setInputValue]
  );

  useEffect(() => {
    if (text) {
      resetFormValues({ edit: text });
    }
  }, []);

  const handleSubmit = (evt: ChangeEvent<EventTarget>) => {
    evt.preventDefault();
    if (isSearchForm) {
      sessionStorage.setItem("keywords", inputValue?.search as string);
      searchTodos({
        keyword: inputValue?.search as string,
        todos: data as TodoType[],
      });
    }
    if (isAddForm) {
      addNewTodo({
        date: `${new Date().toLocaleString().split(" ")[0]} ${
          new Date().toLocaleString().split(" ")[1]
        }`,
        text: inputValue?.add,
        completed: false,
      });
    }
    if (isTodoForm) {
      dispatch(
        editTodo({
          id: Number(id),
          text: inputValue?.edit,
        })
      );
    }
  };
  useEffect(() => {
    refetch();
    searchTodos({
      keyword: "",
      todos: data as TodoType[],
    });

    if (isSuccess) {
      setInputValue((current) => ({
        ...current,
        add: "",
      }));
    }
  }, [data, isSuccess]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="form-outline flex-fill">
        {isSearchForm && (
          <input
            type="text"
            name="search"
            placeholder="Search todo.."
            value={inputValue?.search || ""}
            onChange={handleChange}
            className={`form-control`}
          />
        )}
        {isAddForm && (
          <input
            type="text"
            name="add"
            placeholder="Add todo.."
            value={inputValue?.add || ""}
            onChange={handleChange}
            className={`form-control`}
          />
        )}
        {isTodoForm && (
          <input
            type="text"
            name="edit"
            placeholder="Edit todo.."
            value={inputValue?.edit || ""}
            onChange={handleChange}
            className={`form-control`}
          />
        )}
      </div>
      <button
        type="submit"
        className={`btn ${isTodoForm && "btn-warning"} ${
          isSearchForm && "btn-success"
        } ${isAddForm && "btn-primary"} ${styles["form__button-submit"]}`}
        disabled={
          (isAddForm || isTodoForm) &&
          (inputValue?.add?.length === 0 || inputValue?.edit?.length === 0)
            ? true
            : false
        }
      >
        {isSearchForm && "Search"}
        {isAddForm && "Add"}
        {isTodoForm && "Save"}
      </button>
    </form>
  );
}

export default Form;
