import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneWirelessIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.07 4.93C21.88 6.74 23 9.24 23 12C23 14.76 21.88 17.26 20.07 19.07L18.66 17.66C20.11 16.22 21 14.22 21 12C21 9.79 20.11 7.78 18.66 6.34L20.07 4.93ZM17.24 7.76C18.33 8.85 19 10.35 19 12C19 13.65 18.33 15.15 17.24 16.24L15.83 14.83C16.55 14.11 17 13.11 17 12C17 10.89 16.55 9.89 15.83 9.17L17.24 7.76ZM13 10C13.5304 10 14.0391 10.2107 14.4142 10.5858C14.7893 10.9609 15 11.4696 15 12C15 12.5304 14.7893 13.0391 14.4142 13.4142C14.0391 13.7893 13.5304 14 13 14C12.4696 14 11.9609 13.7893 11.5858 13.4142C11.2107 13.0391 11 12.5304 11 12C11 11.4696 11.2107 10.9609 11.5858 10.5858C11.9609 10.2107 12.4696 10 13 10ZM11.5 1C12.163 1 12.7989 1.26339 13.2678 1.73223C13.7366 2.20107 14 2.83696 14 3.5V8H12V4H3V19H12V16H14V20.5C14 21.163 13.7366 21.7989 13.2678 22.2678C12.7989 22.7366 12.163 23 11.5 23H3.5C2.83696 23 2.20107 22.7366 1.73223 22.2678C1.26339 21.7989 1 21.163 1 20.5V3.5C1 2.83696 1.26339 2.20107 1.73223 1.73223C2.20107 1.26339 2.83696 1 3.5 1H11.5Z" />
    </Svg>
  );
};
