import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyForm from './MyForm';
import MyFormik from './MyFormik';
import Profile from './Profile';
import FormsMenu from './FormsMenu';
import ListMenu from './ListMenu';
import ValidationForm from './ValidationForm';
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
        <div className="App-logo">
          <Profile showHide />
          <p className="App-text">React demo app</p>
        </div>
        <div>
          <ListMenu />
          <FormsMenu />
        </div>
      </header>
      <div>
        <BrowserRouter>
          <Route path="/" exact render={() => <MyForm onSubmit={submit} />} />
          <Route path="/form" render={() => <MyForm onSubmit={submit} />} />
          <Route
            path="/validationform"
            render={() => <ValidationForm onSubmit={submit} />}
          />
          <Route path="/formik" component={MyFormik} />
        </BrowserRouter>
      </div>
      <hr />
      <p className="feedback">
        {formValues && <span>Result: {JSON.stringify(formValues, null, 2)}</span>}
      </p>
    </div>
  );
}

export default App;
