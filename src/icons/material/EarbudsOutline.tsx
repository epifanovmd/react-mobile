import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarbudsOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 3C3 3 2 5 2 6V11C2 12 3 14 5 14C5.61 14 6.32 13.72 7 13.27V20C7 20.55 7.45 21 8 21H9C9.55 21 10 20.55 10 20V8C10 6 7 3 5 3ZM8 10.23L5.91 11.6C5.4 11.93 5.08 12 5 12C4.3 12 4 11.08 4 11V6.03C4 5.92 4.3 5 5 5C5.9 5 8 7.1 8 8V10.23ZM16.5 15C17.2 15 17.87 14.89 18.5 14.68V20C18.5 20.55 18.05 21 17.5 21H15.5C14.95 21 14.5 20.55 14.5 20V14.68C15.13 14.89 15.8 15 16.5 15ZM16.5 3C13.46 3 11 5.46 11 8.5C11 11.54 13.46 14 16.5 14C19.54 14 22 11.54 22 8.5C22 5.46 19.54 3 16.5 3ZM16.5 12C14.57 12 13 10.43 13 8.5C13 6.57 14.57 5 16.5 5C18.43 5 20 6.57 20 8.5C20 10.43 18.43 12 16.5 12Z" />
    </Svg>
  );
};
