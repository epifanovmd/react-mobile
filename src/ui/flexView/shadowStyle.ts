import { Platform } from "react-native";
import { FlexProps } from "./types";

export function shadowStyle(elevation: FlexProps["elevation"] = 0): any {
  return Platform.select({
    ios: {
      shadowRadius: elevation * 2,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowColor: elevation === 0 ? "transparent" : "black",
      shadowOpacity: elevation || 0.14,
    },
    android: { elevation },
  });
}
