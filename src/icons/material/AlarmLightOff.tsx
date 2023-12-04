import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmLightOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.0001 14.8L9.0001 5.8C9.9001 5.3 10.9001 5 12.0001 5C15.3001 5 18.0001 7.7 18.0001 11V14.8ZM20.1001 4.8L18.7001 3.4L16.6001 5.5L18.0001 6.9L20.1001 4.8ZM19.5001 10.5V12.5H22.5001V10.5H19.5001ZM4.5001 10.5H1.5001V12.5H4.5001V10.5ZM1.1001 3L6.6001 8.5C6.2001 9.2 6.0001 10.1 6.0001 11V19H17.1001L18.1001 20H6.0001C4.9001 20 4.0001 20.9 4.0001 22H20.1001L20.8001 22.7L22.1001 21.4L2.4001 1.7L1.1001 3ZM13.0001 1H11.0001V4H13.0001V1Z" />
    </Svg>
  );
};
