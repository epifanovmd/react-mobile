import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OrderBoolDescendingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 13C3.79 13 2 14.79 2 17C2 19.21 3.79 21 6 21C8.21 21 10 19.21 10 17C10 14.79 8.21 13 6 13ZM6 19C4.9 19 4 18.1 4 17C4 15.9 4.9 15 6 15C7.1 15 8 15.9 8 17C8 18.1 7.1 19 6 19ZM6 3C3.79 3 2 4.79 2 7C2 9.21 3.79 11 6 11C8.21 11 10 9.21 10 7C10 4.79 8.21 3 6 3ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z" />
    </Svg>
  );
};
