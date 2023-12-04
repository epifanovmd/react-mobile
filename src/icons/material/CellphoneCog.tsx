import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneCogIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.82005 12.5C9.84005 12.33 9.86005 12.17 9.86005 12C9.86005 11.83 9.84005 11.67 9.82005 11.5L10.9001 10.69C11.0001 10.62 11.0001 10.5 10.9601 10.37L9.93005 8.64C9.87005 8.53 9.73005 8.5 9.62005 8.53L8.34005 9.03C8.07005 8.83 7.78005 8.67 7.47005 8.54L7.27005 7.21C7.27005 7.09 7.16005 7 7.03005 7H5.00005C4.85005 7 4.74005 7.09 4.72005 7.21L4.50005 8.53C4.21005 8.65 3.92005 8.83 3.65005 9L2.37005 8.5C2.25005 8.47 2.12005 8.5 2.06005 8.63L1.03005 10.36C0.970053 10.5 1.00005 10.61 1.10005 10.69L2.18005 11.5C2.16005 11.67 2.15005 11.84 2.15005 12C2.15005 12.17 2.17005 12.33 2.19005 12.5L1.10005 13.32C1.00005 13.39 1.00005 13.53 1.04005 13.64L2.07005 15.37C2.13005 15.5 2.27005 15.5 2.38005 15.5L3.66005 15C3.93005 15.18 4.22005 15.34 4.53005 15.47L4.73005 16.79C4.74005 16.91 4.85005 17 5.00005 17H7.04005C7.17005 17 7.28005 16.91 7.29005 16.79L7.50005 15.47C7.80005 15.35 8.09005 15.17 8.36005 15L9.64005 15.5C9.76005 15.53 9.89005 15.5 9.95005 15.37L11.0001 13.64C11.0401 13.53 11.0001 13.4 10.9201 13.32L9.82005 12.5ZM6.00005 13.75C5.00005 13.75 4.20005 12.97 4.20005 12C4.20005 11.03 5.00005 10.25 6.00005 10.25C7.00005 10.25 7.80005 11.03 7.80005 12C7.80005 12.97 7.00005 13.75 6.00005 13.75ZM17.0001 1H7.00005C6.46962 1 5.96091 1.21071 5.58584 1.58579C5.21077 1.96086 5.00005 2.46957 5.00005 3V6H7.00005V4H17.0001V20H7.00005V18H5.00005V21C5.00005 21.5304 5.21077 22.0391 5.58584 22.4142C5.96091 22.7893 6.46962 23 7.00005 23H17.0001C17.5305 23 18.0392 22.7893 18.4143 22.4142C18.7893 22.0391 19.0001 21.5304 19.0001 21V3C19.0001 2.46957 18.7893 1.96086 18.4143 1.58579C18.0392 1.21071 17.5305 1 17.0001 1Z" />
    </Svg>
  );
};
