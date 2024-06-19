import type { NativeSyntheticEvent, processColor } from "react-native";

export type NativeColorType = ReturnType<typeof processColor>;

export type PickerItemValue = string | number;

export type PickerItem = {
  label: string;
  value: PickerItemValue;
  testID?: string;
  textColor: NativeColorType;
};

export type PickerChangeItem = {
  column: number;
  index: number;
  value: PickerItemValue;
};

export type NativeOnChange = (
  event: NativeSyntheticEvent<PickerChangeItem>,
) => void;
