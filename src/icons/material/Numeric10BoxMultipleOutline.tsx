import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric10BoxMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 17V3H7V17H21ZM21 1C22.11 1 23 1.9 23 3V17C23 18.11 22.11 19 21 19H7C5.9 19 5 18.11 5 17V3C5 1.9 5.9 1 7 1H21ZM3 5V21H19V23H3C1.9 23 1 22.11 1 21V5H3ZM12 5H8V7H10V15H12V5ZM18 5H16C14.9 5 14 5.9 14 7V13C14 14.11 14.9 15 16 15H18C19.11 15 20 14.11 20 13V7C20 5.9 19.11 5 18 5ZM18 13H16V7H18V13Z" />
    </Svg>
  );
};
