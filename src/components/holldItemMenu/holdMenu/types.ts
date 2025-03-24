import React from "react";

export interface HoldMenuItemProp<T = any> {
  text: string;
  icon?: () => React.ReactElement;
  onPress?: (data: T) => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  withSeparator?: boolean;
  variants?: HoldMenuItemProp<T>[];
}
