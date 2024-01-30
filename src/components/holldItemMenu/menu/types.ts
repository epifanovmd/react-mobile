import React from 'react';
import { TransformOriginAnchorPosition } from '../utils/calculations';

export type MenuItemProps = {
  text: string;
  icon?: () => React.ReactElement;
  onPress?: () => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  withSeparator?: boolean;
};

export type MenuInternalProps = {
  items: MenuItemProps[];
  itemHeight: number;
  itemWidth: number;
  itemY: number;
  itemX: number;
  anchorPosition: TransformOriginAnchorPosition;
  menuHeight: number;
  transformValue: number;
};
