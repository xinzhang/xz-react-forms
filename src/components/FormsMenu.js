import React from 'react';
import DropdownMenu from './DropdownMenu';

function FormsMenu() {
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
export default React.memo(FormsMenu);
