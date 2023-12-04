import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarthBoxPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 14H19V17H22V19H19V22H17V19H14V17H17V14ZM5 3H19C20.1 3 21 3.89 21 5V12.8C20.39 12.45 19.72 12.2 19 12.08V5H15.78C15.67 6 14.83 6.79 13.8 6.79H11.8V8.79C11.8 9.35 11.35 9.79 10.8 9.79H8.8V11.79H14.8C15.23 11.79 15.6 12.06 15.74 12.44C13.6 13.31 12.07 15.39 12 17.83C10.7 17.79 9.8 16.9 9.8 15.79V14.79L5 10.29V19H12.08C12.2 19.72 12.45 20.39 12.8 21H5C3.9 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3Z" />
    </Svg>
  );
};
