import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DrupalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.47 14.6504C20.47 15.2904 20.25 16.3604 19.83 17.1004C19.4 17.8504 19.08 18.0604 18.44 18.0604C17.7 17.9504 16.31 15.8204 15.36 15.7204C14.18 15.7204 11.73 18.1704 9.71 18.1704C8.54 18.1704 8.11 17.9504 7.79 17.7404C7.15 17.3104 6.94 16.6704 6.94 15.8204C6.94 14.2204 8.43 12.8404 10.24 12.8404C12.59 12.8404 14.18 15.1804 15.36 15.0804C16.31 15.0804 18.23 13.1604 19.19 13.1604C20.15 12.9504 20.47 14.0004 20.47 14.6504ZM16.63 5.28043C15.57 4.64043 14.61 4.32043 13.54 3.68043C12.91 3.25043 12.05 2.30043 11.31 1.44043C11 2.83043 10.78 3.36043 10.24 3.79043C9.18 4.53043 8.64 4.85043 7.69 5.28043C6.94 5.70043 3 8.05043 3 13.1604C3 18.2704 7.37 22.0004 12.05 22.0004C16.85 22.0004 21 18.5004 21 13.2704C21.21 8.05043 17.27 5.70043 16.63 5.28043Z" />
    </Svg>
  );
};
