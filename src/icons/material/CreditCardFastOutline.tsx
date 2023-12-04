import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardFastOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6H5.54C5.19 6.6 5 7.29 5 8H3ZM5 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11H5V13ZM1 18C0.448 18 0 17.55 0 17C0 16.45 0.448 16 1 16H5C5 16.71 5.19 17.4 5.54 18H1ZM21 6H9C7.89 6 7 6.89 7 8V16C7 17.11 7.89 18 9 18H21C22.11 18 23 17.11 23 16V8C23 6.89 22.11 6 21 6ZM21 8V9H9V8H21ZM9 16V12H21V16H9Z" />
    </Svg>
  );
};
