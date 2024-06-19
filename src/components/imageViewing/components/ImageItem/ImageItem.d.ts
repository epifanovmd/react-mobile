import React from "react";

import { ImageSource } from "../../@types/types";

declare type Props = {
  imageSrc: ImageSource;
  onRequestClose: () => void;
  onZoom: (isZoomed: boolean) => void;
  onLongPress: (image: ImageSource) => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
  swipeCloseOffset?: number;
  swipeCloseVelocity?: number;
};

declare const _default: React.MemoExoticComponent<
  ({
    imageSrc,
    onZoom,
    onRequestClose,
    onLongPress,
    delayLongPress,
    swipeToCloseEnabled,
    swipeCloseOffset,
    swipeCloseVelocity,
  }: Props) => JSX.Element
>;

export default _default;
