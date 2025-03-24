import React from "react";

import { TransformAnchorPosition } from "../utils/calculations";

export interface HoldMenuItemProp<T = any> {
  text: string;
  icon?: () => React.ReactElement;
  onPress?: (data: T) => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  withSeparator?: boolean;
  variants?: HoldMenuItemProp<T>[];
}

export interface HoldMenuContext<T = any> {
  items: HoldMenuItemProp<T>[];
  itemHeight: number;
  itemWidth: number;
  itemY: number;
  itemX: number;
  anchorPosition: TransformAnchorPosition;
  menuHeight: number;
  transformValue: number;
  data?: T;
}
