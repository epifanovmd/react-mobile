import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokeDetectorOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.19999 5.00047L6.19999 3.00047H19C20.11 3.00047 21 3.90047 21 5.00047V17.8005L19 15.8005V5.00047H8.19999ZM17.5 14.3205C17.82 13.6005 18 12.8305 18 12.0005C18 8.68047 15.31 6.00047 12 6.00047C11.17 6.00047 10.4 6.18047 9.67999 6.50047L11.27 8.07047C11.5 8.03047 11.75 8.00047 12 8.00047C14.21 8.00047 16 9.79047 16 12.0005C16 12.2505 15.97 12.5005 15.93 12.7305L17.5 14.3205ZM22.11 21.4605L20.84 22.7305L19.1 21.0005C19.07 21.0005 19.03 21.0005 19 21.0005H4.99999C3.88999 21.0005 2.99999 20.1005 2.99999 19.0005V5.00047C2.99999 4.97047 2.99999 4.93047 2.99999 4.90047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM7.99999 12.0005C7.99999 14.2105 9.78999 16.0005 12 16.0005C12.62 16.0005 13.19 15.8505 13.71 15.6005L8.39998 10.2905C8.14998 10.8105 7.99999 11.3905 7.99999 12.0005ZM17.11 19.0005L15.19 17.0805C14.26 17.6605 13.17 18.0005 12 18.0005C8.68999 18.0005 5.99999 15.3105 5.99999 12.0005C5.99999 10.8305 6.33999 9.74047 6.91999 8.81047L4.99999 6.89047V19.0005H17.11Z" />
    </Svg>
  );
};
