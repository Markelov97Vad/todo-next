import { ReactNode } from "react";
import styles from "./page.module.css";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/Form/SearchForm";

const dataTab = [
  {
    name: "All",
    location: "/search/all",
  },
  {
    name: "Active",
    location: "/search/active",
  },
  {
    name: "Completed",
    location: "/search/completed",
  },
];

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <form className={styles.form}>
        <div className="form-outline flex-fill">
          <input
            type="text"
            placeholder="Search todo.."
            value={}
            onChange={}
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
      </form> */}
      <SearchForm />
      <Navigation data={dataTab} />
      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <ul className="list-group mb-0">{children}</ul>
        </div>
      </div>
    </>
  );
}
