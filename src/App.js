import React, { useState } from 'react';
import MyForm from './MyForm';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState();

  const submit = (e) => {
    console.log('this submit', formValues);
    setFormValues(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>React demo app</div>
        <div className="menu">
          <a className="App-link" href="/form">
            Form
          </a>
          <a className="App-link" href="/formik">
            Formik
          </a>
        </div>
      </header>
      <div>
        <MyForm onSubmit={submit} />
      </div>
      <hr />
      <p className="feedback">
        {formValues && <span>Result: {JSON.stringify(formValues)}</span>}
      </p>
    </div>
  );
}

export default App;
