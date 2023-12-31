import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 4C19.163 4 19.7989 4.26339 20.2678 4.73223C20.7366 5.20107 21 5.83696 21 6.5C21 7.16304 20.7366 7.79893 20.2678 8.26777C19.7989 8.73661 19.163 9 18.5 9C17.837 9 17.2011 8.73661 16.7322 8.26777C16.2634 7.79893 16 7.16304 16 6.5C16 5.83696 16.2634 5.20107 16.7322 4.73223C17.2011 4.26339 17.837 4 18.5 4ZM4.5 20C4.10218 20 3.72064 19.842 3.43934 19.5607C3.15804 19.2794 3 18.8978 3 18.5C3 18.1022 3.15804 17.7206 3.43934 17.4393C3.72064 17.158 4.10218 17 4.5 17H11.5C11.8978 17 12.2794 17.158 12.5607 17.4393C12.842 17.7206 13 18.1022 13 18.5C13 18.8978 12.842 19.2794 12.5607 19.5607C12.2794 19.842 11.8978 20 11.5 20H4.5ZM16.09 19L14.69 15H11L6.75 10.75C6.75 10.75 9 8.25 12.5 8.25C15.5 8.25 15.85 9.25 16.06 9.87L18.92 18C19.2 18.78 18.78 19.64 18 19.92C17.22 20.19 16.36 19.78 16.09 19Z" />
    </Svg>
  );
};
