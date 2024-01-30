import { isEqual } from 'lodash';
import React, { memo } from 'react';

import { HoldMenuItem } from './HoldMenuItem';
import { HoldMenuItemProp } from './types';

export const HoldMenuItems = memo(
  ({ items }: { items: HoldMenuItemProp[] }) => {
    return (
      <>
        {items.map((item: HoldMenuItemProp, index: number) => {
          return (
            <HoldMenuItem
              key={index}
              item={item}
              isLast={items.length === index + 1}
            />
          );
        })}
      </>
    );
  },
  isEqual,
);
