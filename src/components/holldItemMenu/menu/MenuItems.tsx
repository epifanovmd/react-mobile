import { isEqual } from 'lodash';
import React, { memo } from 'react';

import { MenuItem } from './MenuItem';
import { MenuItemProps } from './types';

export const MenuItems = memo(({ items }: { items: MenuItemProps[] }) => {
  return (
    <>
      {items.map((item: MenuItemProps, index: number) => {
        return (
          <MenuItem
            key={index}
            item={item}
            isLast={items.length === index + 1}
          />
        );
      })}
    </>
  );
}, isEqual);
