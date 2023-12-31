import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RedhatIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.34 13.1597C16.66 13.1597 18.56 12.8897 18.56 11.3197C18.57 11.1997 18.56 11.0797 18.53 10.9597L17.75 7.55969C17.57 6.80969 17.41 6.46969 16.09 5.80969C15.07 5.28969 12.85 4.42969 12.19 4.42969C11.58 4.42969 11.4 5.21969 10.67 5.21969C9.97 5.21969 9.45 4.62969 8.79 4.62969C8.16 4.62969 7.75 5.05969 7.43 5.93969C7.43 5.93969 6.55 8.43969 6.43 8.79969C6.42 8.86969 6.41 8.92969 6.41 8.99969C6.41 9.96969 10.23 13.1497 15.34 13.1497V13.1597ZM18.77 11.9597C18.95 12.8197 18.95 12.9097 18.95 12.9997C18.95 14.4997 17.29 15.3097 15.12 15.3097C10.2 15.3097 5.89 12.4297 5.89 10.5297C5.89 10.2597 5.95 9.99969 6.05 9.75969C4.28 9.83969 2 10.1597 2 12.1797C2 15.4997 9.84 19.5697 16.05 19.5697C20.81 19.5697 22 17.4197 22 15.7197C22 14.3797 20.85 12.8597 18.77 11.9597Z" />
    </Svg>
  );
};
