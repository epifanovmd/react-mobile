import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StackOverflowIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.36 20.1991V14.8191H19.15V21.9991H3V14.8191H4.8V20.1991H17.36ZM6.77 14.3191L7.14 12.5591L15.93 14.4091L15.56 16.1691L6.77 14.3191ZM7.93 10.1091L8.69 8.49914L16.83 12.2791L16.07 13.8991L7.93 10.1091ZM10.19 6.11914L11.34 4.73914L18.24 10.4991L17.09 11.8691L10.19 6.11914ZM14.64 1.86914L20 9.07914L18.56 10.1491L13.2 2.93914L14.64 1.86914ZM6.59 18.4091V16.6091H15.57V18.4091H6.59Z" />
    </Svg>
  );
};
