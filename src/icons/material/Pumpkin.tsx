import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PumpkinIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.5 6C7.47 6 8.37 6.5 9.11 7.38C9.66 6.79 10.31 6.36 11 6.15V4C11 3.46957 11.2107 2.96086 11.5858 2.58579C11.9609 2.21071 12.4696 2 13 2H15V4H13V6.15C13.69 6.36 14.34 6.79 14.89 7.38C15.63 6.5 16.53 6 17.5 6C20 6 22 9.36 22 13.5C22 17.64 20 21 17.5 21C16.53 21 15.63 20.5 14.89 19.62C14.08 20.5 13.08 21 12 21C10.92 21 9.92 20.5 9.11 19.62C8.37 20.5 7.47 21 6.5 21C4 21 2 17.64 2 13.5C2 9.36 4 6 6.5 6Z" />
    </Svg>
  );
};
