import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SocialDistance2MetersIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 6C7.1 6 8 5.1 8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 5.1 4.9 6 6 6ZM10 9.43C10 8.62 9.5 7.9 8.78 7.58C7.93 7.21 7 7 6 7C5 7 4.07 7.21 3.22 7.58C2.5 7.9 2 8.62 2 9.43V10H10V9.43ZM18 6C19.1 6 20 5.1 20 4C20 2.9 19.1 2 18 2C16.9 2 16 2.9 16 4C16 5.1 16.9 6 18 6ZM22 9.43C22 8.62 21.5 7.9 20.78 7.58C19.93 7.21 19 7 18 7C17 7 16.07 7.21 15.22 7.58C14.5 7.9 14 8.62 14 9.43V10H22V9.43ZM19 17V15H5V17L2 14L5 11V13H19V11L22 14L19 17ZM9 20.5V21H11V22H8V20.5C8 19.95 8.45 19.5 9 19.5H10V19H8V18H10C10.55 18 11 18.45 11 19V19.5C11 20.05 10.55 20.5 10 20.5H9ZM16 19V22H15V19H14.5V21H13.5V19H13V22H12V19C12 18.45 12.45 18 13 18H15C15.55 18 16 18.45 16 19Z" />
    </Svg>
  );
};
