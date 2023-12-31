import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmNoteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.4 1.85999L16.11 3.38999L20.71 7.24999L22 5.71999L17.4 1.85999ZM6.6 1.85999L2 5.70999L3.29 7.23998L7.88 3.38999L6.6 1.85999ZM12 3.99999C9.61305 3.99999 7.32387 4.9482 5.63604 6.63602C3.94821 8.32385 3 10.613 3 13C3 15.3869 3.94821 17.6761 5.63604 19.3639C7.32387 21.0518 9.61305 22 12 22C12.33 22 12.67 22 13 21.94V19.94C12.67 20 12.33 20 12 20C10.1435 20 8.36301 19.2625 7.05025 17.9497C5.7375 16.637 5 14.8565 5 13C5 11.1435 5.7375 9.36299 7.05025 8.05024C8.36301 6.73748 10.1435 5.99999 12 5.99999C15.1 5.99999 17.83 8.02999 18.71 11H20.78C19.85 6.89999 16.2 3.99999 12 3.99999ZM23 15H20V20.5C20 21.163 19.7366 21.7989 19.2678 22.2678C18.7989 22.7366 18.163 23 17.5 23C16.837 23 16.2011 22.7366 15.7322 22.2678C15.2634 21.7989 15 21.163 15 20.5C15 19.8369 15.2634 19.2011 15.7322 18.7322C16.2011 18.2634 16.837 18 17.5 18C18.04 18 18.57 18.18 19 18.5V13H23V15ZM11.5 7.99999V13.25L7.5 15.62L8.25 16.85L13 14V7.99999H11.5Z" />
    </Svg>
  );
};
