import { Platform, ShadowStyleIOS } from "react-native";

import { FlexProps } from "./types";

export const shadowStyle = (
  elevation: FlexProps["elevation"] = 0,
): ShadowStyleIOS & { elevation: number } => {
  return Platform.select({
    ios: {
      shadowRadius: elevation * 1.5,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowColor: elevation === 0 ? "transparent" : "black",
      shadowOpacity: Math.min(0.3, elevation * 0.05),
      elevation,
    },
    default: { elevation },
  });
};
