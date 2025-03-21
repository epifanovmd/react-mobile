import { Dimensions, Platform } from "react-native";

const HOLD_ITEM_TRANSFORM_DURATION = 150;
const HOLD_ITEM_SCALE_DOWN_VALUE = 0.95;
const HOLD_ITEM_SCALE_DOWN_DURATION = 210;

const SPRING_CONFIGURATION = {
  damping: 33,
  mass: 1.03,
  stiffness: 500,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
};

const SPRING_CONFIGURATION_MENU = {
  damping: 39,
  mass: 1.09,
  stiffness: 500,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
};

enum CONTEXT_MENU_STATE {
  PENDING = 0,
  ACTIVE,
  END,
}

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get("screen");

const MENU_WIDTH = WINDOW_WIDTH * 0.6;
const MENU_TRANSFORM_ORIGIN_TOLERENCE = 10;
const IS_IOS = Platform.OS === "ios";
const FONT_SCALE = Dimensions.get("screen").fontScale;

export {
  CONTEXT_MENU_STATE,
  FONT_SCALE,
  HOLD_ITEM_SCALE_DOWN_DURATION,
  HOLD_ITEM_SCALE_DOWN_VALUE,
  HOLD_ITEM_TRANSFORM_DURATION,
  IS_IOS,
  MENU_TRANSFORM_ORIGIN_TOLERENCE,
  MENU_WIDTH,
  SPRING_CONFIGURATION,
  SPRING_CONFIGURATION_MENU,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
};
