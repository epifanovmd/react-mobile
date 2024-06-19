import React from "react";
import { ColorValue, Text } from "react-native";

export interface PickerItemProps {
  label: string;
  value: string | number;
  color?: ColorValue;
  testID?: string;
}

export const PickerItem = ({ color, label, ...props }: PickerItemProps) => {
  return (
    <Text style={{ color }} {...props}>
      {label}
    </Text>
  );
};
