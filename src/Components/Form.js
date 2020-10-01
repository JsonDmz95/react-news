import React from "react";
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={`row ${styles.searcher}`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Find news by category</h2>

          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darkn-2 ${styles['btn-block']}`}
              value="Search News"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
