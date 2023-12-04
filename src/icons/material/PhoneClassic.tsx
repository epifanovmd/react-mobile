import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneClassicIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3C7.46 3 3.34 4.78 0.29 7.67C0.11 7.85 0 8.1 0 8.38C0 8.66 0.11 8.91 0.29 9.09L2.77 11.57C2.95 11.75 3.2 11.86 3.5 11.86C3.75 11.86 4 11.75 4.18 11.58C4.97 10.84 5.87 10.22 6.84 9.73C7.17 9.57 7.4 9.23 7.4 8.83V5.73C8.85 5.25 10.39 5 12 5C13.59 5 15.14 5.25 16.59 5.72V8.82C16.59 9.21 16.82 9.56 17.15 9.72C18.13 10.21 19 10.84 19.82 11.57C20 11.75 20.25 11.85 20.5 11.85C20.8 11.85 21.05 11.74 21.23 11.56L23.71 9.08C23.89 8.9 24 8.65 24 8.37C24 8.09 23.88 7.85 23.7 7.67C20.65 4.78 16.53 3 12 3ZM9 7V10C9 10 3 15 3 18V22H21V18C21 15 15 10 15 10V7H13V9H11V7H9ZM12 12C13.0609 12 14.0783 12.4214 14.8284 13.1716C15.5786 13.9217 16 14.9391 16 16C16 17.0609 15.5786 18.0783 14.8284 18.8284C14.0783 19.5786 13.0609 20 12 20C10.9391 20 9.92172 19.5786 9.17157 18.8284C8.42143 18.0783 8 17.0609 8 16C8 14.9391 8.42143 13.9217 9.17157 13.1716C9.92172 12.4214 10.9391 12 12 12ZM12 13.5C11.337 13.5 10.7011 13.7634 10.2322 14.2322C9.76339 14.7011 9.5 15.337 9.5 16C9.5 16.663 9.76339 17.2989 10.2322 17.7678C10.7011 18.2366 11.337 18.5 12 18.5C12.663 18.5 13.2989 18.2366 13.7678 17.7678C14.2366 17.2989 14.5 16.663 14.5 16C14.5 15.337 14.2366 14.7011 13.7678 14.2322C13.2989 13.7634 12.663 13.5 12 13.5Z" />
    </Svg>
  );
};
