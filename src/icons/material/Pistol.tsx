import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PistolIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.99992 5H22.9999V9H21.9999V10H15.9999C15.7347 10 15.4804 10.1054 15.2928 10.2929C15.1053 10.4804 14.9999 10.7348 14.9999 11V12C14.9999 12.5304 14.7892 13.0391 14.4141 13.4142C14.0391 13.7893 13.5304 14 12.9999 14H9.61992C9.23992 14 8.88992 14.22 8.71992 14.56L6.26992 19.45C6.09992 19.79 5.75992 20 5.37992 20H1.99992C1.99992 20 -1.00008 20 2.99992 14C2.99992 14 5.99992 10 1.99992 10V5H2.99992L3.49992 4H6.49992L6.99992 5ZM13.9999 12V11C13.9999 10.7348 13.8946 10.4804 13.707 10.2929C13.5195 10.1054 13.2651 10 12.9999 10H11.9999C11.9999 10 10.9999 11 11.9999 12C11.4695 12 10.9608 11.7893 10.5857 11.4142C10.2106 11.0391 9.99992 10.5304 9.99992 10C9.7347 10 9.48035 10.1054 9.29282 10.2929C9.10528 10.4804 8.99992 10.7348 8.99992 11V12C8.99992 12.2652 9.10528 12.5196 9.29282 12.7071C9.48035 12.8946 9.7347 13 9.99992 13H12.9999C13.2651 13 13.5195 12.8946 13.707 12.7071C13.8946 12.5196 13.9999 12.2652 13.9999 12Z" />
    </Svg>
  );
};
