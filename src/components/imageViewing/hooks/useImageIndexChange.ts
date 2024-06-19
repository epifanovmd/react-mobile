import { useEffect, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import { Dimensions } from "../types";

export const useImageIndexChange = (imageIndex: number, screen: Dimensions) => {
  const [currentImageIndex, setImageIndex] = useState(imageIndex);

  useEffect(() => {
    setImageIndex(imageIndex);
  }, [imageIndex]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      nativeEvent: {
        contentOffset: { x: scrollX },
      },
    } = event;

    if (screen.width) {
      const nextIndex = Math.round(scrollX / screen.width);

      setImageIndex(nextIndex < 0 ? 0 : nextIndex);
    }
  };

  return [currentImageIndex, onScroll] as const;
};
