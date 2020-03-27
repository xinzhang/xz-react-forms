import React from 'react';
import DropdownMenu from './DropdownMenu';

function FormsMenu({ menuText }) {
  const items = [
    { path: '/form', text: 'React Form' },
    { path: '/validationform', text: 'Form Validation' },
    { path: '/formik', text: 'Formik demo' },
  ];
  return (
    // <div className="navbar-item has-dropdown is-hoverable">
    //   <a className="navbar-link">{menuText}</a>
    //   <div className="navbar-dropdown">
    //     {items.map((item) => (
    //       <a href={item.path} className="navbar-item" key={item.text}>
    //         {item.text}
    //       </a>
    //     ))}
    //     <hr className="navbar-divider" />
    //     <div className="navbar-item">Logout</div>
    //   </div>
    // </div>
    <DropdownMenu menuText="Forms" expanded="false">
      {items}
    </DropdownMenu>
  );
}
export default React.memo(FormsMenu);
