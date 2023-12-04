import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SphereIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 14C7.58 14 4 13.11 4 12C4 10.9 7.58 10 12 10C16.42 10 20 10.9 20 12C20 13.11 16.42 14 12 14ZM12 4C15.37 4 18.25 6.09 19.43 9.05C17.93 8.43 15.61 8 12 8C9.8 8 6.73 8.19 4.57 9.05C5.75 6.09 8.63 4 12 4ZM12 20C8.63 20 5.75 17.91 4.57 14.95C6.07 15.57 8.39 16 12 16C14.2 16 17.27 15.81 19.43 14.95C18.25 17.91 15.37 20 12 20Z" />
    </Svg>
  );
};
