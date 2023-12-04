import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AxisYRotateClockwiseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 10L16.0001 14L20.0001 10H16.9001C16.4401 5.44 14.4201 2 12.0001 2C10.1201 2 8.47011 4.08 7.62011 7.16L9.37011 8.17C9.87011 5.69 10.8601 4 12.0001 4C13.4001 4 14.5701 6.55 14.9101 10H12.0001ZM1.11011 6.87L13.8901 14.25L13.9601 13.46L10.5001 10H10.5401L2.11011 5.13L1.11011 6.87ZM21.8901 18.87L22.8901 17.13L17.8801 14.24C17.7901 14.97 17.6701 15.67 17.5001 16.34L21.8901 18.87ZM12.0001 22C14.3001 22 16.2301 18.9 16.8201 14.68L16.0001 15.5L14.8701 14.37C14.5001 17.63 13.3501 20 12.0001 20C10.4201 20 9.12011 16.73 9.00011 12.58L7.00011 11.43V12C7.00011 17.5 9.24011 22 12.0001 22Z" />
    </Svg>
  );
};
