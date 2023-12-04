import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TransitSkipIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 12C21 8 18.5 4.7 15 3.5C14.7 2.1 13.5 1 12 1C10.3 1 9 2.3 9 4C9 5.7 10.3 7 12 7C13.1 7 14.1 6.4 14.6 5.5C17.2 6.5 19 9 19 12C19 14.9 17.2 17.5 14.6 18.5C14.1 17.6 13.1 17 12 17C10.3 17 9 18.3 9 20C9 21.7 10.3 23 12 23C13.5 23 14.7 21.9 15 20.5C18.5 19.3 21 15.9 21 12ZM12 5C11.4 5 11 4.6 11 4C11 3.4 11.4 3 12 3C12.6 3 13 3.4 13 4C13 4.6 12.6 5 12 5ZM12 21C11.4 21 11 20.6 11 20C11 19.4 11.4 19 12 19C12.6 19 13 19.4 13 20C13 20.6 12.6 21 12 21ZM12 9C13.7 9 15 10.3 15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9Z" />
    </Svg>
  );
};
