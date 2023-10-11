"use client";
import SearchForm from "../components/Form/SearchForm";
import TodoList from "../components/TodoList/TodoList";
import { useAppSelector } from "../hooks/redux";
import { useGetTodosQuery } from "../store/todos/reducer";
import styles from "./page.module.css";

function Add() {
  const { refetch } = useGetTodosQuery("");
  const { searchData } = useAppSelector((state) => state.todo);
  return (
    <>
      {/* // <form className={styles.form}>
    //   <div className="form-outline flex-fill">
    //     <input type="text" placeholder="Add todo.." id="form2" className={`form-control`} />
    //   </div>
    //   <button type="submit" className={`btn btn-primary ${styles['form__button-submit']}`}>Add</button>
    // </form></> */}
      <SearchForm />
      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <ul className="list-group mb-0">
            {/* {children} */}
            <>
              {searchData?.map((todo, i) => (
                <TodoList key={i} data={todo} />
              ))}
            </>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Add;
