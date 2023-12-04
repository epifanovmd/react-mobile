import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H13C12.59 21.75 12.2 21.44 11.86 21.1C9.22 18.67 9.05 14.56 11.5 11.92C13.69 9.5 17.33 9.13 20 11V8L14 2ZM13 9V3.5L18.5 9H13ZM20.31 18.9C21.64 16.79 21 14 18.91 12.68C16.8 11.35 14 12 12.69 14.08C11.35 16.19 12 18.97 14.09 20.3C15.55 21.23 17.41 21.23 18.88 20.32L22 23.39L23.39 22L20.31 18.9ZM16.5 19C15.837 19 15.2011 18.7366 14.7322 18.2678C14.2634 17.7989 14 17.163 14 16.5C14 15.837 14.2634 15.2011 14.7322 14.7322C15.2011 14.2634 15.837 14 16.5 14C17.163 14 17.7989 14.2634 18.2678 14.7322C18.7366 15.2011 19 15.837 19 16.5C19 17.163 18.7366 17.7989 18.2678 18.2678C17.7989 18.7366 17.163 19 16.5 19Z" />
    </Svg>
  );
};
