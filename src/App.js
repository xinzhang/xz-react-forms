import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyForm from './components/MyForm';
import MyFormik from './components/MyFormik';
import Profile from './components/Profile';
import FormsMenu from './components/FormsMenu';
import ListMenu from './components/ListMenu';
import ValidationForm from './components/ValidationForm';
import './styles/App.scss';

function App() {
  const [formValues, setFormValues] = useState();

  const submit = (e) => {
    console.log('this submit', formValues);
    setFormValues(e);
  };

  return (
    <div>
      {/* <nav className="navbar">
        <div className="navbar-brand">
          <Profile showHide />
        </div>
        <div className="navbar-item">
          <p className="subtitle">React demo app</p>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-right">
            <ListMenu />
            
          </div>
        </div>
      </nav>
      */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <Profile showHide />
            </a>
            <div className="navbar-item">
              <p className="subtitle">React demo app</p>
            </div>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <FormsMenu menuText="Forms" />
            </div>
          </div>
        </div>
      </nav>
      <div className="has-text-centered">
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
