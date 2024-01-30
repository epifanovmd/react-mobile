import React from 'react';
import { TransformOriginAnchorPosition } from '../utils/calculations';

export interface HoldMenuItemProp {
  text: string;
  icon?: () => React.ReactElement;
  onPress?: () => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  withSeparator?: boolean;
}

export interface HoldMenuContext {
  items: HoldMenuItemProp[];
  itemHeight: number;
  itemWidth: number;
  itemY: number;
  itemX: number;
  anchorPosition: TransformOriginAnchorPosition;
  menuHeight: number;
  transformValue: number;
}
