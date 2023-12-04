import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountTieVoiceOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.7 9.5L7.50002 4.3C7.96002 4.11 8.46002 4 9.00002 4C11.2 4 13 5.79 13 8C13 8.53 12.89 9.04 12.7 9.5ZM16.75 11.63C18.77 9.61 18.77 6.56 16.75 4.36L15.07 6.05C15.91 7.23 15.91 8.76 15.07 9.94L16.75 11.63ZM20.06 15C23.96 11.11 24 5.05 20.06 1L18.43 2.63C21.2 5.65 21.2 10.19 18.43 13.37L20.06 15ZM2.39002 1.73L1.11002 3L5.13002 7C5.05002 7.34 5.00002 7.66 5.00002 8C5.00002 10.21 6.79002 12 9.00002 12C9.33002 12 9.66002 11.94 9.97002 11.86L13 14.87C12.93 16.06 12.54 18.32 10.8 20.83L10 16L10.93 14.12C10.31 14.05 9.66002 14 9.00002 14C8.32002 14 7.67002 14.05 7.05002 14.12L8.00002 16L7.18002 20.83C5.27002 18.07 5.00002 15.6 5.00002 14.54C2.60002 15.24 0.994019 16.5 0.994019 18V22H17V18.88L20.84 22.73L22.11 21.46L2.39002 1.73Z" />
    </Svg>
  );
};
