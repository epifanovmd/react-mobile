import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12ZM15.5 14C14.837 14 14.2011 14.2634 13.7322 14.7322C13.2634 15.2011 13 15.837 13 16.5C13 17.163 13.2634 17.7989 13.7322 18.2678C14.2011 18.7366 14.837 19 15.5 19C16.163 19 16.7989 18.7366 17.2678 18.2678C17.7366 17.7989 18 17.163 18 16.5C18 15.837 17.7366 15.2011 17.2678 14.7322C16.7989 14.2634 16.163 14 15.5 14ZM6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 2.89 4.9 2 6 2H7V9L9.5 7.5L12 9V2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V11.81C18.83 10.69 17.25 10 15.5 10C13.7761 10 12.1228 10.6848 10.9038 11.9038C9.68482 13.1228 9 14.7761 9 16.5C9 18.81 10.21 20.85 12.03 22H6Z" />
    </Svg>
  );
};
