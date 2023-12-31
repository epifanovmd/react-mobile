import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrophoneVariantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L16 19.26C15.86 21.35 14.12 23 12 23C10.9391 23 9.92172 22.5786 9.17157 21.8284C8.42143 21.0783 8 20.0609 8 19V18H7L6.16 9.82C5.82 9.47 5.53 9.06 5.33 8.6L2 5.27ZM9 3C10.0609 3 11.0783 3.42143 11.8284 4.17157C12.5786 4.92172 13 5.93913 13 7H8.82L6.08 4.26C6.81 3.5 7.85 3 9 3ZM11.84 9.82L11.82 10L9.82 8H12.87C12.69 8.7 12.33 9.32 11.84 9.82ZM11 18H10V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19V17.27L11.35 14.62L11 18ZM18 10H20L19 11L20 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14V14.18L14.3 12.5C14.9 11 16.33 10 18 10ZM8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.21 13 9.4 12.94 9.56 12.83L8.17 11.44C8.06 11.6 8 11.79 8 12Z" />
    </Svg>
  );
};
