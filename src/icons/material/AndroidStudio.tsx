import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AndroidStudioIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 2H13V4H13.5C13.8978 4 14.2794 4.15804 14.5607 4.43934C14.842 4.72064 15 5.10218 15 5.5V9L14.56 9.44L16.2 12.28C17.31 11.19 18 9.68 18 8H20C20 10.42 18.93 12.59 17.23 14.06L20.37 19.5L20.5 21.72L18.63 20.5L15.56 15.17C14.5 15.7 13.28 16 12 16C10.72 16 9.5 15.7 8.44 15.17L5.37 20.5L3.5 21.72L3.63 19.5L9.44 9.44L9 9V5.5C9 5.10218 9.15804 4.72064 9.43934 4.43934C9.72064 4.15804 10.1022 4 10.5 4H11V2ZM9.44 13.43C10.22 13.8 11.09 14 12 14C12.91 14 13.78 13.8 14.56 13.43L13.1 10.9H13.09C12.47 11.5 11.53 11.5 10.91 10.9H10.9L9.44 13.43ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z" />
    </Svg>
  );
};
