import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric10BoxMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 5V21H19V23H3C1.9 23 1 22.11 1 21V5H3ZM16 13H18V7H16V13ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.11 1 21 1ZM12 15H10V7H8V5H12V15ZM20 13C20 14.11 19.11 15 18 15H16C14.9 15 14 14.11 14 13V7C14 5.9 14.9 5 16 5H18C19.11 5 20 5.9 20 7V13Z" />
    </Svg>
  );
};
