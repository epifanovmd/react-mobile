import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandBackRightOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 7C21 5.62 19.88 4.5 18.5 4.5C18.33 4.5 18.16 4.5 18 4.55V4C18 2.62 16.88 1.5 15.5 1.5C15.27 1.5 15.04 1.53 14.83 1.59C14.46 0.66 13.56 0 12.5 0C11.27 0 10.25 0.89 10.04 2.06C9.86997 2 9.68997 2 9.49997 2C8.11997 2 6.99997 3.12 6.99997 4.5V10.39C6.65997 10.08 6.23997 9.85 5.77997 9.73L4.99997 9.5C4.17997 9.29 3.30997 9.61 2.81997 10.35C2.43997 10.92 2.41997 11.66 2.66997 12.3L5.22997 18.73C6.49997 21.91 9.56997 24 13 24C17.42 24 21 20.42 21 16V7ZM19 16C19 19.31 16.31 22 13 22C10.39 22 8.04997 20.41 7.08997 18L4.49997 11.45L4.99997 11.59C5.49997 11.71 5.84997 12.05 5.99997 12.5L6.99997 15H8.99997V4.5C8.99997 4.22 9.21997 4 9.49997 4C9.77997 4 9.99997 4.22 9.99997 4.5V12H12V2.5C12 2.22 12.22 2 12.5 2C12.78 2 13 2.22 13 2.5V12H15V4C15 3.72 15.22 3.5 15.5 3.5C15.78 3.5 16 3.72 16 4V12H18V7C18 6.72 18.22 6.5 18.5 6.5C18.78 6.5 19 6.72 19 7V16Z" />
    </Svg>
  );
};
