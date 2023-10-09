import Navigation from "../components/Navigation/Navigation";
import TodoList from "../components/TodoList/TodoList";
import styles from "./page.module.css"

const dataTab = [
  {
    name: 'All',
    location: ''
  },
  {
    name: 'Active',
    location: ''
  },
  {
    name: 'Completed',
    location: ''
  }
]


const todoData = [
  {
    text: 'Dapibus ac facilisis in'
  },
  {
    text: 'Morbi leo risus'
  },
]
function Search() {
  return (
    <>
    {/* <form className={styles.form}>
      <div className="form-outline flex-fill">
        <input type="text" placeholder="Search todo.." id="form2" className={`form-control`} />
      </div>
      <button type="submit" className={`btn btn-success ${styles['form__button-submit']}`}>Search</button>
    </form> */}
    {/* <Navigation data={dataTab}/> */}
    {/* <div className="tab-content" id="ex1-content">
      <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
        aria-labelledby="ex1-tab-1">
        <ul className="list-group mb-0">
          {
            todoData.map((todo, i) => (
              <TodoList key={i} text={todo.text}/> 
            ))
          }
          <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
            style={{ backgroundColor: "#f4f6f7"}}>
            <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
            Vestibulum at eros
          </li>
        </ul>
        </div>
      </div> */}
    </>
  );
}

export default Search;