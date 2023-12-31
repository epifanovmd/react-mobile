import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BunkBedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 2V23H3V21H21V23H23V7C23 4.79 21.21 3 19 3H10V8H3V2H1ZM6.5 2C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5C4 5.16304 4.26339 5.79893 4.73223 6.26777C5.20107 6.73661 5.83696 7 6.5 7C6.8283 7 7.15339 6.93534 7.45671 6.8097C7.76002 6.68406 8.03562 6.49991 8.26777 6.26777C8.49991 6.03562 8.68406 5.76002 8.8097 5.45671C8.93534 5.15339 9 4.8283 9 4.5C9 3.83696 8.73661 3.20107 8.26777 2.73223C7.79893 2.26339 7.16304 2 6.5 2ZM3 11H21V13.56C20.41 13.21 19.73 13 19 13H10V18H3V11ZM6.5 12C5.83696 12 5.20107 12.2634 4.73223 12.7322C4.26339 13.2011 4 13.837 4 14.5C4 15.163 4.26339 15.7989 4.73223 16.2678C5.20107 16.7366 5.83696 17 6.5 17C7.16304 17 7.79893 16.7366 8.26777 16.2678C8.73661 15.7989 9 15.163 9 14.5C9 13.837 8.73661 13.2011 8.26777 12.7322C7.79893 12.2634 7.16304 12 6.5 12Z" />
    </Svg>
  );
};
