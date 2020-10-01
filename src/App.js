import React, {Fragment} from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
// import './App.css';

function App() {
  return (
    <Fragment>
      <Header title="News Searcher"/>

      <div className="container white">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
