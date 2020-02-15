import React from 'react';

function Menu() {
  return (
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
  );
}
export default React.memo(Menu);
