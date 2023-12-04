import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ExpansionCardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 7V8.5H3V17H4.5V7C3.7 7 2.8 7 2 7ZM6 7V16H7V17H14V16H22V7H6ZM17.5 9C18.163 9 18.7989 9.26339 19.2678 9.73223C19.7366 10.2011 20 10.837 20 11.5C20 12.163 19.7366 12.7989 19.2678 13.2678C18.7989 13.7366 18.163 14 17.5 14C16.837 14 16.2011 13.7366 15.7322 13.2678C15.2634 12.7989 15 12.163 15 11.5C15 10.837 15.2634 10.2011 15.7322 9.73223C16.2011 9.26339 16.837 9 17.5 9Z" />
    </Svg>
  );
};
