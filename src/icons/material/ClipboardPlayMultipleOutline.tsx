import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardPlayMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4ZM20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.2C11.6 1.8 12.7 1 14 1C15.3 1 16.4 1.8 16.8 3H20ZM14 3C13.4 3 13 3.5 13 4C13 4.5 13.4 5 14 5C14.6 5 15 4.6 15 4C15 3.4 14.6 3 14 3ZM10 7V5H8V17H20V5H18V7H10ZM12 15V9L17 12" />
    </Svg>
  );
};
