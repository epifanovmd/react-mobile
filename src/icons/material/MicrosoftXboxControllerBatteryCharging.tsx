import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftXboxControllerBatteryChargingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.9999 5H21.6699C22.3999 5 22.9999 5.6 22.9999 6.33V19.67C22.9999 20.0227 22.8598 20.361 22.6104 20.6105C22.3609 20.8599 22.0226 21 21.6699 21H14.3299C13.5999 21 12.9999 20.4 12.9999 19.67V16.75H7.7499C5.7499 16.75 4.9999 19 2.9999 20C0.9999 20 -0.5001 17 3.4999 8.5H3.7499L4.1899 7.67C4.1899 7.67 6.9999 6 8.3299 7.23H12.9999V6.33C12.9999 5.97726 13.14 5.63897 13.3894 5.38955C13.6389 5.14012 13.9772 5 14.3299 5H15.9999V3H19.9999V5ZM20.9999 7H14.9999V19H20.9999V7ZM15.4999 14L18.4999 7.5V12H20.4999L17.4999 18.5V14H15.4999ZM10.9999 8C10.7347 8 10.4803 8.10536 10.2928 8.29289C10.1053 8.48043 9.9999 8.73478 9.9999 9C9.9999 9.26522 10.1053 9.51957 10.2928 9.70711C10.4803 9.89464 10.7347 10 10.9999 10C11.2651 10 11.5195 9.89464 11.707 9.70711C11.8945 9.51957 11.9999 9.26522 11.9999 9C11.9999 8.73478 11.8945 8.48043 11.707 8.29289C11.5195 8.10536 11.2651 8 10.9999 8Z" />
    </Svg>
  );
};
