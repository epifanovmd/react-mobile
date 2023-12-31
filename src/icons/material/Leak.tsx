import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LeakIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 3H3V6C3.79565 6 4.55871 5.68393 5.12132 5.12132C5.68393 4.55871 6 3.79565 6 3ZM14 3H12C12 5.38695 11.0518 7.67613 9.36396 9.36396C7.67613 11.0518 5.38695 12 3 12V14C9.08 14 14 9.07 14 3ZM10 3H8C8 4.32608 7.47322 5.59785 6.53553 6.53553C5.59785 7.47322 4.32608 8 3 8V10C4.85652 10 6.63699 9.2625 7.94975 7.94975C9.2625 6.63699 10 4.85652 10 3ZM10 21H12C12 18.6131 12.9482 16.3239 14.636 14.636C16.3239 12.9482 18.6131 12 21 12V10C18.0826 10 15.2847 11.1589 13.2218 13.2218C11.1589 15.2847 10 18.0826 10 21ZM18 21H21V18C20.2044 18 19.4413 18.3161 18.8787 18.8787C18.3161 19.4413 18 20.2044 18 21ZM14 21H16C16 19.6739 16.5268 18.4021 17.4645 17.4645C18.4021 16.5268 19.6739 16 21 16V14C19.1435 14 17.363 14.7375 16.0503 16.0503C14.7375 17.363 14 19.1435 14 21Z" />
    </Svg>
  );
};
