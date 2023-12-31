import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SendClockOutlineIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M2 3V10L11 12L2 14V21L9.27 17.89C9.68184 19.3587 10.5621 20.6527 11.777 21.5751C12.9918 22.4975 14.4747 22.9978 16 23C17.8565 23 19.637 22.2625 20.9497 20.9497C22.2625 19.637 23 17.8565 23 16C23 14.1435 22.2625 12.363 20.9497 11.0503C19.637 9.7375 17.8565 9 16 9L2 3ZM4 6.03L12.78 9.8C12.546 9.92044 12.319 10.054 12.1 10.2L4 8.4V6.03ZM16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C14.6739 21 13.4021 20.4732 12.4645 19.5355C11.5268 18.5979 11 17.3261 11 16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11ZM15 12.5V16.5L18 18.5L18.75 17.25L16.5 15.75V12.5H15ZM9.18 14.45C9.07496 14.8996 9.01467 15.3585 9 15.82L4 17.97V15.6L9.18 14.45Z" />
    </Svg>
  );
};
