import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PitchforkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.9 0.900391L13.1 3.70039C12.3 4.50039 12.3 5.70039 13.1 6.50039L14.5 8.00039L9.2 13.4004L7.8 12.0004C7 11.2004 5.8 11.2004 5 12.0004L1 16.0004L2.4 17.4004L6.4 13.4004L7.8 14.8004L3.8 18.8004L5.2 20.2004L9.2 16.2004L10.6 17.6004L9.9 18.4004L6.7 21.6004L8 23.0004L12 19.0004C12.8 18.2004 12.8 17.0004 12 16.2004L10.6 14.8004L15.9 9.40039L17.3 10.8004C18.1 11.6004 19.3 11.6004 20.1 10.8004L23 8.00039L15.9 0.900391ZM18.7 9.40039L14.5 5.20039L15.9 3.80039L20.1 8.00039L18.7 9.40039Z" />
    </Svg>
  );
};
