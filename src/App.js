import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyForm from './MyForm';
import MyFormik from './MyFormik';
import Profile from './Profile';
import ValidationForm from './ValidationForm';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState();

  const submit = (e) => {
    console.log('this submit', formValues);
    setFormValues(e);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <Profile />
            <p className="App-text">React demo app</p>
          </div>
          <div className="menu">
            <a className="App-link" href="/form">
              Form
            </a>
            <a className="App-link" href="/validationform">
              ValidateForm
            </a>
            <a className="App-link" href="/formik">
              Formik
            </a>
          </div>
        </header>
        <div>
          <Route path="/" exact render={() => <MyForm onSubmit={submit} />} />
          <Route path="/form" render={() => <MyForm onSubmit={submit} />} />
          <Route
            path="/validationform"
            render={() => <ValidationForm onSubmit={submit} />}
          />
          <Route path="/formik" component={MyFormik} />
        </div>
        <hr />
        <p className="feedback">
          {formValues && <span>Result: {JSON.stringify(formValues, null, 2)}</span>}
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
