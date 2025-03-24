import React from "react";
import { MeasuredDimensions } from "react-native-reanimated";

import { HoldMenuItemProp } from "./holdMenu";

export interface IHoldItemValue<T> {
  data?: T;
  content: React.ReactNode;
  menu?: HoldMenuItemProp<T>[];
  measured: MeasuredDimensions;
  onClose: () => void;
}

export interface IHoldPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}
