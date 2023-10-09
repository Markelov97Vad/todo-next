import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList/TodoList";

const todoData = [
  {
    text: 'Dapibus ac facilisis in'
  },
  {
    text: 'Morbi leo risus'
  },
]

const dataTab = [
  {
    name: 'All',
    location: '/search/all'
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
// const dataTab2 = [
//   {
//     name: 'Add',
//     location: ''
//   },
//   {
//     name: 'Search',
//     location: ''
//   },
// ]

export default function Home() {
  return (
    <main>
      {/* <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10"> */}

              {/* <div className="card">
                <div className="card-body p-5"> */}
                  {/* <Navigation data={dataTab2}/> */}
                  {/* <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input type="text" id="form2" className="form-control" />
                      <label className="form-label" htmlFor="form2">New task...</label>
                    </div>
                    <button type="submit" className="btn btn-info ms-2">Add</button>
                  </form>

                  <Navigation data={dataTab}/> */}
                  {/* <!-- Tabs navs --> */}

                  {/* <!-- Tabs content --> */}
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
                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                      <ul className="list-group mb-0">
                        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                          style={{ backgroundColor: "#f4f6f7"}}>
                          <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                          Morbi leo risus
                        </li>
                        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                          style={{ backgroundColor: "#f4f6f7"}}>
                          <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                          Porta ac consectetur ac
                        </li>
                        <li className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                          style={{ backgroundColor: "#f4f6f7"}}>
                          <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                          Vestibulum at eros
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                      <ul className="list-group mb-0">
                        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                          style={{ backgroundColor: "#f4f6f7"}}>
                          <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                          <s>Cras justo odio</s>
                        </li>
                        <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                          style={{ backgroundColor: "#f4f6f7"}}>
                          <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                          <s>Dapibus ac facilisis in</s>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <!-- Tabs content --> */}

                {/* </div>
              </div> */}

            {/* </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}