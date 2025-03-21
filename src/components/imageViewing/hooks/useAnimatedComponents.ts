import { Animated } from "react-native";

const INITIAL_POSITION = { x: 0, y: 0 };
const ANIMATION_CONFIG = {
  duration: 200,
  useNativeDriver: true,
};

export const useAnimatedComponents = () => {
  const headerTranslate = new Animated.ValueXY(INITIAL_POSITION);
  const footerTranslate = new Animated.ValueXY(INITIAL_POSITION);

  const toggleVisible = (isVisible: boolean) => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(headerTranslate.y, { ...ANIMATION_CONFIG, toValue: 0 }),
        Animated.timing(footerTranslate.y, { ...ANIMATION_CONFIG, toValue: 0 }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(headerTranslate.y, {
          ...ANIMATION_CONFIG,
          toValue: -300,
        }),
        Animated.timing(footerTranslate.y, {
          ...ANIMATION_CONFIG,
          toValue: 300,
        }),
      ]).start();
    }
  };

  const headerTransform = headerTranslate.getTranslateTransform();
  const footerTransform = footerTranslate.getTranslateTransform();

  return [headerTransform, footerTransform, toggleVisible] as const;
};
