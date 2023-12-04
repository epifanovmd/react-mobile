import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CircleMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 4C17.1217 4 19.1566 4.84285 20.6569 6.34315C22.1571 7.84344 23 9.87827 23 12C23 14.1217 22.1571 16.1566 20.6569 17.6569C19.1566 19.1571 17.1217 20 15 20C12.8783 20 10.8434 19.1571 9.34315 17.6569C7.84285 16.1566 7 14.1217 7 12C7 9.87827 7.84285 7.84344 9.34315 6.34315C10.8434 4.84285 12.8783 4 15 4ZM15 18C16.5913 18 18.1174 17.3679 19.2426 16.2426C20.3679 15.1174 21 13.5913 21 12C21 10.4087 20.3679 8.88258 19.2426 7.75736C18.1174 6.63214 16.5913 6 15 6C13.4087 6 11.8826 6.63214 10.7574 7.75736C9.63214 8.88258 9 10.4087 9 12C9 13.5913 9.63214 15.1174 10.7574 16.2426C11.8826 17.3679 13.4087 18 15 18ZM3 12C3 14.61 4.67 16.83 7 17.65V19.74C3.55 18.85 1 15.73 1 12C1 8.27 3.55 5.15 7 4.26V6.35C4.67 7.17 3 9.39 3 12Z" />
    </Svg>
  );
};
