import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApiOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 11H5V9H7V11ZM14 7H11.38L13.29 9H14V9.75L15.87 11.71C15.95 11.5 16 11.25 16 11V9C16 7.9 15.11 7 14 7ZM4.45 2.62L3 4L5.86 7H5C3.9 7 3 7.9 3 9V17H5V13H7V17H9V10.3L10 11.34V17H12V13.45L19.55 21.38L21 20L4.45 2.62ZM20.9 17H21V15H20V9H21V7H17V9H18V13.95L20.9 17Z" />
    </Svg>
  );
};
