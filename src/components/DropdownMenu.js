import React, { useState } from 'react';

function DropdownMenu({ expanded, menuText, children }) {
  const [itemsVisible, setItemsVisible] = useState(expanded);
  const switchVisible = () => {
    const invert = itemsVisible === true ? false : true;
    setItemsVisible(invert);
  };

  return (
    // <div className="menu" onClick={switchVisible}>
    //   {menuText}

    //   {itemsVisible === true && (
    //     <ul className="menu-items">
    //       {children.map((item, index) => (
    //         <li key={index} className="menu-item">
    //           <a
    //             alt={item.text}
    //             className="App-link"
    //             href={item.path}
    //             onClick={() => setItemsVisible(false)}
    //           >
    //             {item.text}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{menuText}</a>
      <div className="navbar-dropdown">
        {children.map((item) => (
          <a href={item.path} className="navbar-item" key={item.text}>
            {item.text}
          </a>
        ))}
        <hr className="navbar-divider" />
        <div className="navbar-item">Logout</div>
      </div>
    </div>
  );
}

export default DropdownMenu;
