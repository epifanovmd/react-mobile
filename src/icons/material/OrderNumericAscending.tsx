import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OrderNumericAscendingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 21H3V19H7V18H5C3.9 18 3 17.11 3 16V15C3 13.9 3.9 13 5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21ZM7 15H5V16H7V15ZM5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11H5C3.9 11 3 10.11 3 9V5C3 3.9 3.9 3 5 3ZM5 9H7V5H5V9ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z" />
    </Svg>
  );
};
