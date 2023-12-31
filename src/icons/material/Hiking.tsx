import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HikingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.4701 8.67H19.0001V23H17.4701V12.6C16.6701 12.44 15.9201 12.14 15.2101 11.71C14.5001 11.28 13.9001 10.78 13.3901 10.2L12.7701 13.27L15.0001 15.47V23H13.0001V17L10.7601 14.8L8.89007 23H6.73007C6.73007 23 9.86007 7.22 9.89007 7.09C10.0001 6.61 10.2201 6.24 10.5901 6C10.9601 5.73 11.3301 5.6 11.7101 5.6C12.1001 5.6 12.4601 5.69 12.7901 5.87C13.1301 6.04 13.3901 6.29 13.5801 6.61L14.6401 8.24C14.9301 8.78 15.3201 9.25 15.8101 9.63C16.3001 10.01 16.8601 10.3 17.4701 10.5V8.67ZM8.55007 5.89L7.40007 5.65C6.83007 5.5 6.31007 5.62 5.84007 5.94C5.38007 6.26 5.10007 6.7 5.00007 7.28L4.19007 11.26C4.16007 11.55 4.22007 11.81 4.38007 12.05C4.54007 12.29 4.75007 12.42 5.00007 12.46L7.21007 12.89L8.55007 5.89ZM13.0001 1C11.9001 1 11.0001 1.9 11.0001 3C11.0001 4.1 11.9001 5 13.0001 5C14.1001 5 15.0001 4.11 15.0001 3C15.0001 1.89 14.1101 1 13.0001 1Z" />
    </Svg>
  );
};
