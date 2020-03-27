import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyForm from './components/MyForm';
import MyFormik from './components/MyFormik';
import Profile from './components/Profile';
import FormsMenu from './components/FormsMenu';
import ListMenu from './components/ListMenu';
import ValidationForm from './components/ValidationForm';
import './styles/App.css';

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
