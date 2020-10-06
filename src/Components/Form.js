import React from "react";
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = () => {

  const options = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];

  //using custom hook useSelect
  const [category, SelectNews] = useSelect('genetal', options);

  return (
    <div className={`row ${styles.searcher}`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Find news by category</h2>

          <SelectNews />

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
