import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScriptIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.8 20C17.4 21.2 16.3 22 15 22H5C3.3 22 2 20.7 2 19V18H5H14.2C14.6 19.2 15.7 20 17 20H17.8ZM19 2H8C6.3 2 5 3.3 5 5V16H16V17C16 17.6 16.4 18 17 18H18V5C18 4.4 18.4 4 19 4C19.6 4 20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2Z" />
    </Svg>
  );
};
