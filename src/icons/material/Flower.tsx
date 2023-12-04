import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlowerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 13C3 15.3869 3.94821 17.6761 5.63604 19.364C7.32387 21.0518 9.61305 22 12 22C12 17 7.97 13 3 13ZM12 5.5C12.663 5.5 13.2989 5.76339 13.7678 6.23223C14.2366 6.70107 14.5 7.33696 14.5 8C14.5 8.66304 14.2366 9.29893 13.7678 9.76777C13.2989 10.2366 12.663 10.5 12 10.5C11.337 10.5 10.7011 10.2366 10.2322 9.76777C9.76339 9.29893 9.5 8.66304 9.5 8C9.5 7.33696 9.76339 6.70107 10.2322 6.23223C10.7011 5.76339 11.337 5.5 12 5.5ZM5.6 10.25C5.6 10.913 5.86339 11.5489 6.33223 12.0178C6.80107 12.4866 7.43696 12.75 8.1 12.75C8.63 12.75 9.12 12.58 9.5 12.31C9.5 12.37 9.5 12.43 9.5 12.5C9.5 13.163 9.76339 13.7989 10.2322 14.2678C10.7011 14.7366 11.337 15 12 15C12.663 15 13.2989 14.7366 13.7678 14.2678C14.2366 13.7989 14.5 13.163 14.5 12.5C14.5 12.43 14.5 12.37 14.5 12.31C14.88 12.58 15.37 12.75 15.9 12.75C17.28 12.75 18.4 11.63 18.4 10.25C18.4 9.25 17.81 8.4 16.97 8C17.81 7.6 18.4 6.74 18.4 5.75C18.4 4.37 17.28 3.25 15.9 3.25C15.37 3.25 14.88 3.41 14.5 3.69C14.5 3.63 14.5 3.56 14.5 3.5C14.5 2.83696 14.2366 2.20107 13.7678 1.73223C13.2989 1.26339 12.663 1 12 1C11.337 1 10.7011 1.26339 10.2322 1.73223C9.76339 2.20107 9.5 2.83696 9.5 3.5C9.5 3.56 9.5 3.63 9.5 3.69C9.12 3.41 8.63 3.25 8.1 3.25C7.43696 3.25 6.80107 3.51339 6.33223 3.98223C5.86339 4.45107 5.6 5.08696 5.6 5.75C5.6 6.74 6.19 7.6 7.03 8C6.19 8.4 5.6 9.25 5.6 10.25ZM12 22C14.3869 22 16.6761 21.0518 18.364 19.364C20.0518 17.6761 21 15.3869 21 13C16 13 12 17 12 22Z" />
    </Svg>
  );
};
