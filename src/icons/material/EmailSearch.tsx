import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V10.82C20 9.85 18.7 9.23 17.31 9.06L19 8V6L11 11L3 6V8L10.62 12.76C10.21 13.62 10 14.55 10 15.5C10 17.18 10.65 18.79 11.81 20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V6C1 4.89 1.89 4 3 4ZM16.5 11C19 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5C12 13 14 11 16.5 11ZM16.5 13C15.837 13 15.2011 13.2634 14.7322 13.7322C14.2634 14.2011 14 14.837 14 15.5C14 16.163 14.2634 16.7989 14.7322 17.2678C15.2011 17.7366 15.837 18 16.5 18C17.163 18 17.7989 17.7366 18.2678 17.2678C18.7366 16.7989 19 16.163 19 15.5C19 14.837 18.7366 14.2011 18.2678 13.7322C17.7989 13.2634 17.163 13 16.5 13Z" />
    </Svg>
  );
};
