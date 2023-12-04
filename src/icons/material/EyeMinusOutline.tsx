import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyeMinusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4.50001C9.62463 4.49772 7.30386 5.21238 5.34126 6.55052C3.37866 7.88865 1.8656 9.78796 1 12C1.8656 14.212 3.37866 16.1114 5.34126 17.4495C7.30386 18.7876 9.62463 19.5023 12 19.5H13.1C13.0225 19.1726 12.9889 18.8363 13 18.5C12.9836 18.1305 13.0172 17.7605 13.1 17.4H12C10.1711 17.4318 8.37126 16.9404 6.81225 15.9838C5.25323 15.0271 3.99997 13.6449 3.2 12C3.98559 10.3364 5.23268 8.93356 6.7928 7.95848C8.35292 6.9834 10.1604 6.47716 12 6.50001C13.8396 6.47716 15.6471 6.9834 17.2072 7.95848C18.7673 8.93356 20.0144 10.3364 20.8 12L20.4 12.7C21.0857 12.8195 21.7353 13.093 22.3 13.5C22.574 13.02 22.8081 12.5183 23 12C22.1344 9.78796 20.6213 7.88865 18.6587 6.55052C16.6961 5.21238 14.3754 4.49772 12 4.50001ZM12 9.00001C11.4067 9.00001 10.8266 9.17595 10.3333 9.5056C9.83994 9.83524 9.45542 10.3038 9.22836 10.852C9.0013 11.4001 8.94189 12.0033 9.05764 12.5853C9.1734 13.1672 9.45912 13.7018 9.87868 14.1213C10.2982 14.5409 10.8328 14.8266 11.4147 14.9424C11.9967 15.0581 12.5999 14.9987 13.1481 14.7716C13.6962 14.5446 14.1648 14.1601 14.4944 13.6667C14.8241 13.1734 15 12.5933 15 12C15.014 11.6023 14.9459 11.2059 14.8001 10.8356C14.6543 10.4653 14.4338 10.129 14.1524 9.84761C13.871 9.5662 13.5347 9.34572 13.1644 9.1999C12.7941 9.05408 12.3977 8.98604 12 9.00001ZM15 17.5V19.5H23V17.5H15Z" />
    </Svg>
  );
};
