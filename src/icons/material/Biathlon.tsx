import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BiathlonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.88 3.64004C13.65 3.64004 14.28 4.27004 14.28 5.04004C14.28 5.81004 13.65 6.44004 12.88 6.44004C12.11 6.44004 11.5 5.81004 11.5 5.04004C11.5 4.27004 12.11 3.64004 12.88 3.64004ZM15 13H16.5V19H15V13ZM15 8.50004H16.5V10H15V8.50004ZM10.04 2.60004L8 2.04004L6.06 8.58004L3.9 11.42L7.17 12.37L10.04 2.60004ZM19.67 18.55C19.31 18.93 18.88 19.5 18.4 19.7C17.91 19.92 17.54 20 17 20H13.5L13.43 17C13.42 16.83 13.37 16.67 13.28 16.5L10.88 12.24L11.76 9.50004C12.34 10.55 13 11.73 13.06 11.83C13.21 12 13.45 12.13 13.69 12.13H15.9C16.1148 12.13 16.3209 12.0447 16.4728 11.8928C16.6247 11.7409 16.71 11.5349 16.71 11.32C16.71 10.9 16.38 10.56 15.96 10.53L14.29 10.4L12.4 7.00004C12.4 7.00004 12 6.42004 11.14 6.42004C10.27 6.42004 10 6.84004 9.83 7.42004L6 20H3V22H17C18.37 22 19.53 21.34 20.5 20.37L19.67 18.55ZM9.75 14.39L11.62 17.39L11.75 20H7.75L9.75 14.39Z" />
    </Svg>
  );
};
