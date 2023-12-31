import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NfcIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.24001 2C5.60001 2 3.96001 2 3.55001 2.04C2.67001 2.09 2.08001 2.73 2.04001 3.56C2.00001 4.37 2.00001 19.59 2.04001 20.41C2.09001 21.23 2.71001 21.86 3.55001 21.91C4.46001 21.96 7.44001 21.97 8.29001 21.97C6.76001 20.91 6.55001 18.92 6.41001 15.23C6.33001 13.04 6.40001 5.36 6.41001 5.04L6.45001 2.94L14.5 11V13.5L8.09001 7.11C8.08001 8.38 8.06001 10.03 8.06001 11.54C8.06001 13 8.08001 14.34 8.12001 15.05C8.36001 19.07 8.74001 20.96 10.83 21.7C11.5 21.93 12.07 22 13.07 22C13.89 22 19.63 22 20.45 21.96C21.33 21.91 21.93 21.27 21.97 20.44C22 19.63 22 4.45 21.97 3.62C21.91 2.8 21.29 2.18 20.45 2.13C19.54 2.08 16.57 2.03 15.71 2.03C17.24 3.09 17.44 5.08 17.59 8.78C17.67 10.97 17.6 18.64 17.59 18.97L17.55 21.06L9.53001 13V10.5L15.91 16.89C15.92 15.62 15.94 13.97 15.94 12.46C15.94 11 15.92 9.66 15.88 8.96C15.64 4.93 15.26 3.04 13.17 2.3C12.53 2.07 11.93 2 10.93 2H7.24001Z" />
    </Svg>
  );
};
