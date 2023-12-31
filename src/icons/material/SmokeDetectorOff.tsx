import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokeDetectorOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 8.00047C14.21 8.00047 16 9.79047 16 12.0005C16 12.2505 15.97 12.5005 15.93 12.7305L11.27 8.07047C11.5 8.03047 11.75 8.00047 12 8.00047ZM12 6.00047C15.31 6.00047 18 8.68047 18 12.0005C18 12.8305 17.82 13.6005 17.5 14.3205L21 17.8005V5.00047C21 3.90047 20.11 3.00047 19 3.00047H6.19999L9.67999 6.50047C10.4 6.18047 11.17 6.00047 12 6.00047ZM22.11 21.4605L20.84 22.7305L19.1 21.0005C19.07 21.0005 19.03 21.0005 19 21.0005H4.99999C3.88999 21.0005 2.99999 20.1005 2.99999 19.0005V5.00047C2.99999 4.97047 2.99999 4.93047 2.99999 4.90047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM15.19 17.0805L13.71 15.6005C13.19 15.8505 12.62 16.0005 12 16.0005C9.78999 16.0005 7.99999 14.2105 7.99999 12.0005C7.99999 11.3905 8.14998 10.8105 8.39998 10.2905L6.91999 8.81047C6.33999 9.74047 5.99999 10.8305 5.99999 12.0005C5.99999 15.3105 8.68999 18.0005 12 18.0005C13.17 18.0005 14.26 17.6605 15.19 17.0805Z" />
    </Svg>
  );
};
