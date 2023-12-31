import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftXboxControllerBatteryUnknownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.67 5C22.4 5 23 5.6 23 6.33V19.67C23 20.0227 22.8599 20.361 22.6105 20.6105C22.3611 20.8599 22.0228 21 21.67 21H14.33C13.6 21 13 20.4 13 19.67V16.75H7.75002C5.75002 16.75 5.00002 19 3.00002 20C1.00002 20 -0.499978 17 3.50002 8.5H3.75002L4.19002 7.67C4.19002 7.67 7.00002 6 8.33002 7.23H13V6.33C13 5.97726 13.1401 5.63897 13.3896 5.38955C13.639 5.14012 13.9773 5 14.33 5H16V3H20V5H21.67ZM11 8C10.7348 8 10.4805 8.10536 10.2929 8.29289C10.1054 8.48043 10 8.73478 10 9C10 9.26522 10.1054 9.51957 10.2929 9.70711C10.4805 9.89464 10.7348 10 11 10C11.2652 10 11.5196 9.89464 11.7071 9.70711C11.8947 9.51957 12 9.26522 12 9C12 8.73478 11.8947 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8ZM18.19 8C17.32 8 16.62 8.2 16.08 8.59C15.56 9 15.3 9.57 15.31 10.36L15.32 10.39H17.25C17.26 10.09 17.35 9.86 17.53 9.7C17.71 9.55 17.93 9.47 18.19 9.47C18.5 9.47 18.76 9.57 18.94 9.75C19.12 9.94 19.2 10.2 19.2 10.5C19.2 10.82 19.13 11.09 18.97 11.32C18.83 11.55 18.62 11.75 18.36 11.91C17.85 12.25 17.5 12.55 17.31 12.82C17.11 13.08 17 13.5 17 14H19C19 13.69 19.04 13.44 19.13 13.26C19.22 13.08 19.39 12.9 19.64 12.74C20.09 12.5 20.46 12.21 20.75 11.81C21.04 11.41 21.19 11 21.19 10.5C21.19 9.74 20.92 9.13 20.38 8.68C19.85 8.23 19.12 8 18.19 8ZM17 15V17H19V15H17Z" />
    </Svg>
  );
};
