import { isEqual } from 'lodash';
import React, { memo } from 'react';

import { MenuItem } from './MenuItem';
import { HoldMenuItem } from './types';

export const MenuItems = memo(({ items }: { items: HoldMenuItem[] }) => {
  return (
    <>
      {items.map((item: HoldMenuItem, index: number) => {
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
