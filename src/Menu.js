import React from 'react';
import DropdownMenu from './DropdownMenu';

function Menu() {
  // return (
  //   <div className="menu">
  //     <a className="App-link" href="/form">
  //       Form
  //     </a>
  //     <a className="App-link" href="/validationform">
  //       ValidateForm
  //     </a>
  //     <a className="App-link" href="/formik">
  //       Formik
  //     </a>
  //   </div>
  // );
  const items = [
    { path: '/form', text: 'React Form' },
    { path: '/validationform', text: 'Form Validation' },
    { path: '/formik', text: 'Formik demo' },
  ];
  return (
    <DropdownMenu menuText="Forms" expanded="false">
      {items}
    </DropdownMenu>
  );
}
export default React.memo(Menu);
