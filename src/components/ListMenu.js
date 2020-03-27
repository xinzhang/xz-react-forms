import React from 'react';
import DropdownMenu from './DropdownMenu';

function ListMenu() {
  const items = [{ path: '/list', text: 'Show List' }];
  return (
    <DropdownMenu menuText="List" expanded="false" >
      {items}
    </DropdownMenu>
  );
}
export default React.memo(ListMenu);
