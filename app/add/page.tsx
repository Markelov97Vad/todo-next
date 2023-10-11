"use client";
import SearchForm from "../components/Form/SearchForm";
import TodoList from "../components/TodoList/TodoList";
import { useAppSelector } from "../hooks/redux";

function Add() {
  const { searchData } = useAppSelector((state) => state.todo);
  return (
    <>
      <SearchForm />
      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <ul className="list-group mb-0">
            <>
              {searchData?.length > 0 ? (
                searchData?.map((todo, i) => <TodoList key={i} data={todo} />)
              ) : (
                <span>To do are missing.</span>
              )}
            </>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Add;
