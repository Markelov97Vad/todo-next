import styles from './page.module.css'

function Add() {
  return (
    <>
    <form className={styles.form}>
      <div className="form-outline flex-fill">
        <input type="text" placeholder="Add todo.." id="form2" className={`form-control`} />
      </div>
      <button type="submit" className={`btn btn-primary ${styles['form__button-submit']}`}>Add</button>
    </form></>
  );
}

export default Add;