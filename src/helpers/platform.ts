import { useEffect, useRef, useState } from "react";
import { Dimensions, EmitterSubscription, Platform } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
  ifIphoneX,
  isIphoneX,
} from "react-native-iphone-x-helper";

const PAD_WIDTH = 768;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get("window");

const isAndroid = Platform.OS === "android";
const isIos = Platform.OS === "ios";
const isWeb = Platform.OS === "web";

const isIPhoneX = isIphoneX();

const isIPad = (() => {
  if (!isIos || isIPhoneX) {
    return false;
  }

  if (D_HEIGHT > D_WIDTH && D_WIDTH < PAD_WIDTH) {
    return false;
  }

  return !(D_WIDTH > D_HEIGHT && D_HEIGHT < PAD_WIDTH);
})();

const isLandscape = ({ width, height }: { width: number; height: number }) =>
  width > height;

const useIsLandscape = () => {
  const dimensionsSubscription = useRef<EmitterSubscription | null>(null);

  const [landscape, setIsLandscape] = useState(
    isLandscape(Dimensions.get("window")),
  );

  const handleOrientationChange = ({ window }: any) => {
    const _landscape = isLandscape(window);

    setIsLandscape(_landscape);
  };

  useEffect(() => {
    dimensionsSubscription.current = Dimensions.addEventListener(
      "change",
      handleOrientationChange,
    );

    return () => {
      if (dimensionsSubscription.current) {
        dimensionsSubscription.current.remove();
      }
    };
  }, []);

  return landscape;
};

export {
  D_HEIGHT,
  D_WIDTH,
  getBottomSpace,
  getStatusBarHeight,
  ifIphoneX,
  isAndroid,
  isIos,
  isIPad,
  isIPhoneX,
  isWeb,
  PAD_WIDTH,
  useIsLandscape,
};
