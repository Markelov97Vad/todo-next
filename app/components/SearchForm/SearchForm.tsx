"use client";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchForm.module.css";
import {
  useGetTodosQuery,
} from "@/app/store/todos/reducer";
import { useActions } from "@/app/hooks/actions";
import { TodoType } from "@/app/types/todo.type";

type inputValueType = {
  search?: string;
};

function SearchForm() {
  const [inputValue, setInputValue] = useState<inputValueType | null>(null);
  const { data } = useGetTodosQuery("");
  const { searchTodos } = useActions();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setInputValue((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: ChangeEvent<EventTarget>) => {
    evt.preventDefault();
    searchTodos({
      keyword: inputValue?.search as string,
      todos: data as TodoType[],
    });
  };

  useEffect(() => {
    searchTodos({
      keyword: "",
      todos: data as TodoType[],
    });
  }, [data]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="form-outline flex-fill">
        <input
          type="text"
          name="search"
          placeholder="Search todo.."
          value={inputValue?.search || ""}
          onChange={handleChange}
          id="form2"
          className={`form-control`}
        />
      </div>
      <button
        type="submit"
        className={`btn btn-success ${styles["form__button-submit"]}`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
