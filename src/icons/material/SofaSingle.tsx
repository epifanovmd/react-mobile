import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SofaSingleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15ZM20 10C18.9 10 18 10.9 18 12V15H6V12C6 10.9 5.11 10 4 10C2.89 10 2 10.9 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z" />
    </Svg>
  );
};
