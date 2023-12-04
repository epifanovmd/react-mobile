import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StomachIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.99996 18C4.66996 19.85 6.06996 22 12 22C14.36 22 17.07 21.93 19 20C20 19 22 17 22 11C22 5 20 4 18 4C16.62 4 15 4 14 6V6.03C13.82 6.35638 13.5441 6.61962 13.2097 6.78416C12.8752 6.94869 12.4984 7.00658 12.13 6.95C11 6.81 11 6.37 11 6V2H8.99996V6C8.98893 6.39697 9.05898 6.79201 9.20584 7.16098C9.3527 7.52994 9.57327 7.86507 9.85408 8.14588C10.1349 8.42668 10.47 8.64726 10.839 8.79412C11.2079 8.94098 11.603 9.01103 12 9C13 9 13 10.78 13 12C13 13.89 12.5 15.26 11 16C8.68996 17.15 6.38996 17 5.60996 15.47C5.52964 15.229 5.38941 15.0123 5.20243 14.8403C5.01545 14.6683 4.78785 14.5466 4.54097 14.4866C4.29408 14.4266 4.03601 14.4303 3.79096 14.4974C3.54591 14.5645 3.3219 14.6927 3.13996 14.87C2.71653 15.2648 2.39251 15.7542 2.19438 16.2982C1.99625 16.8422 1.92963 17.4253 1.99996 18V22H3.99996V18Z" />
    </Svg>
  );
};
