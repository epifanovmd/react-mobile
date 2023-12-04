import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyeMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4.50001C9.62463 4.49772 7.30386 5.21238 5.34126 6.55052C3.37866 7.88865 1.8656 9.78796 1 12C1.8656 14.212 3.37866 16.1114 5.34126 17.4495C7.30386 18.7876 9.62463 19.5023 12 19.5H13.1C13.0225 19.1726 12.9889 18.8363 13 18.5C13.0175 17.9286 13.0844 17.3598 13.2 16.8L12 17C11.0111 17 10.0444 16.7068 9.22215 16.1574C8.3999 15.6079 7.75904 14.8271 7.3806 13.9134C7.00216 12.9998 6.90315 11.9945 7.09607 11.0246C7.289 10.0546 7.7652 9.16373 8.46447 8.46447C9.16373 7.76521 10.0546 7.28901 11.0245 7.09608C11.9945 6.90315 12.9998 7.00217 13.9134 7.38061C14.827 7.75905 15.6079 8.39991 16.1573 9.22215C16.7068 10.0444 17 11.0111 17 12C17.0157 12.3034 16.9819 12.6074 16.9 12.9C17.5647 12.6227 18.2799 12.4865 19 12.5C20.1778 12.478 21.3326 12.8279 22.3 13.5C22.574 13.02 22.8081 12.5183 23 12C22.1344 9.78796 20.6213 7.88865 18.6587 6.55052C16.6961 5.21238 14.3754 4.49772 12 4.50001ZM12 9.00001C11.4067 9.00001 10.8266 9.17595 10.3333 9.5056C9.83994 9.83524 9.45542 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05764 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15.014 11.6023 14.9459 11.2059 14.8001 10.8356C14.6543 10.4653 14.4338 10.129 14.1524 9.84761C13.871 9.5662 13.5347 9.34572 13.1644 9.1999C12.7941 9.05408 12.3977 8.98604 12 9.00001ZM15 17.5V19.5H23V17.5H15Z" />
    </Svg>
  );
};
