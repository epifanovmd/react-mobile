import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SwimIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 17.9999C4.22 16.9999 6.44 15.9999 8.67 15.9999C10.89 15.9999 13.11 17.9999 15.33 17.9999C17.56 17.9999 19.78 15.9999 22 15.9999V18.9999C19.78 18.9999 17.56 20.9999 15.33 20.9999C13.11 20.9999 10.89 18.9999 8.67 18.9999C6.44 18.9999 4.22 19.9999 2 20.9999V17.9999ZM8.67 12.9999C7.89 12.9999 7.12 13.1199 6.35 13.3199L11.27 9.87992L10.23 8.63992C10.09 8.46992 10 8.23992 10 7.99992C10 7.65992 10.17 7.34992 10.44 7.16992L16.16 3.16992L17.31 4.79992L12.47 8.18992L17.7 14.4199C16.91 14.7499 16.12 14.9999 15.33 14.9999C13.11 14.9999 10.89 12.9999 8.67 12.9999ZM18 6.99992C18.5304 6.99992 19.0391 7.21064 19.4142 7.58571C19.7893 7.96078 20 8.46949 20 8.99992C20 9.53035 19.7893 10.0391 19.4142 10.4141C19.0391 10.7892 18.5304 10.9999 18 10.9999C17.4696 10.9999 16.9609 10.7892 16.5858 10.4141C16.2107 10.0391 16 9.53035 16 8.99992C16 8.46949 16.2107 7.96078 16.5858 7.58571C16.9609 7.21064 17.4696 6.99992 18 6.99992Z" />
    </Svg>
  );
};
