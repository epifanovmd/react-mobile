import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 12C19 12 21 14 21 16.5C21 17.38 20.75 18.21 20.31 18.9L23.39 22L22 23.39L18.88 20.32C18.19 20.75 17.37 21 16.5 21C14 21 12 19 12 16.5C12 14 14 12 16.5 12ZM16.5 14C15.837 14 15.2011 14.2634 14.7322 14.7322C14.2634 15.2011 14 15.837 14 16.5C14 17.163 14.2634 17.7989 14.7322 18.2678C15.2011 18.7366 15.837 19 16.5 19C17.163 19 17.7989 18.7366 18.2678 18.2678C18.7366 17.7989 19 17.163 19 16.5C19 15.837 18.7366 15.2011 18.2678 14.7322C17.7989 14.2634 17.163 14 16.5 14ZM19 8H3V18H10.17C10.34 18.72 10.63 19.39 11 20H3C1.89 20 1 19.1 1 18V6C1 4.89 1.89 4 3 4H9L11 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V11.81C20.42 11.26 19.75 10.81 19 10.5V8Z" />
    </Svg>
  );
};
