import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadPlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H8.99996V18H7.99996C6.89996 18 5.99996 17.1 5.99996 16V13H4.49996C4.09996 13 3.79996 12.5 4.09996 12.2L5.99996 9.7C6.19996 5.9 9.19996 3 13 3ZM13 1C8.39996 1 4.59996 4.4 4.09996 8.9L2.49996 11C1.89996 11.7 1.79996 12.7 2.19996 13.6C2.59996 14.3 3.19996 14.8 3.99996 15V16C3.99996 17.9 5.29996 19.4 6.99996 19.9V23H18V17.5C20.5 15.9 22 13.1 22 10C22 5 18 1 13 1ZM17 10H14V13H12V10H8.99996V8H12V5H14V8H17V10Z" />
    </Svg>
  );
};
