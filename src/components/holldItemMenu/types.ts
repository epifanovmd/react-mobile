import React from "react";
import { MeasuredDimensions } from "react-native-reanimated";

import { HoldMenuItemProp } from "./holdMenu/types";

export interface IHoldItemValue<T> {
  data?: T;
  content: React.ReactNode;
  menuItems?: HoldMenuItemProp<T>[];
  measured: MeasuredDimensions;
  onClose: () => void;
}
