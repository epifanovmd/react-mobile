import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CakeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.5 0.5C12 0.75 13 2.4 13 3.5C13 4.6 12.33 5 11.5 5C10.67 5 10 4.85 10 3.75C10 2.65 11 2 11.5 0.5ZM18.5 9C21 9 23 11 23 13.5C23 15.06 22.21 16.43 21 17.24V23H12H3V17.24C1.79 16.43 1 15.06 1 13.5C1 11 3 9 5.5 9H10V6H13V9H18.5ZM12 16C12.663 16 13.2989 15.7366 13.7678 15.2678C14.2366 14.7989 14.5 14.163 14.5 13.5H16C16 14.163 16.2634 14.7989 16.7322 15.2678C17.2011 15.7366 17.837 16 18.5 16C19.163 16 19.7989 15.7366 20.2678 15.2678C20.7366 14.7989 21 14.163 21 13.5C21 12.837 20.7366 12.2011 20.2678 11.7322C19.7989 11.2634 19.163 11 18.5 11H5.5C4.83696 11 4.20107 11.2634 3.73223 11.7322C3.26339 12.2011 3 12.837 3 13.5C3 14.163 3.26339 14.7989 3.73223 15.2678C4.20107 15.7366 4.83696 16 5.5 16C6.16304 16 6.79893 15.7366 7.26777 15.2678C7.73661 14.7989 8 14.163 8 13.5H9.5C9.5 14.163 9.76339 14.7989 10.2322 15.2678C10.7011 15.7366 11.337 16 12 16Z" />
    </Svg>
  );
};
