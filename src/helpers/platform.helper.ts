import { Dimensions, EmitterSubscription, Platform } from "react-native";
import {
  isIphoneX,
  getStatusBarHeight,
  ifIphoneX,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import { useEffect, useRef, useState } from "react";

const PAD_WIDTH = 768;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get("window");

const isAndroid = Platform.OS === "android";

const isIPhoneX = isIphoneX();

const isIPad = (() => {
  if (Platform.OS !== "ios" || isIPhoneX) {
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
  getStatusBarHeight,
  ifIphoneX,
  getBottomSpace,
  PAD_WIDTH,
  D_HEIGHT,
  D_WIDTH,
  isAndroid,
  isIPhoneX,
  isIPad,
  useIsLandscape,
};
