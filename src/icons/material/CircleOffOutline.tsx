import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CircleOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.46L2.39011 1.72998L1.11011 2.99998L4.06011 5.94998C2.78011 7.62998 2.00011 9.71998 2.00011 12C2.00011 17.5 6.50011 22 12.0001 22C14.2801 22 16.3701 21.23 18.0501 19.94L20.8401 22.73L22.1101 21.46ZM12.0001 20C7.58011 20 4.00011 16.42 4.00011 12C4.00011 10.27 4.56011 8.67998 5.50011 7.37998L16.6201 18.5C15.3201 19.45 13.7301 20 12.0001 20ZM8.17011 4.96998L6.72011 3.49998C8.25011 2.55998 10.0601 1.99998 12.0001 1.99998C17.5001 1.99998 22.0001 6.49998 22.0001 12C22.0001 13.94 21.4401 15.75 20.5001 17.28L19.0301 15.83C19.6501 14.69 20.0001 13.39 20.0001 12C20.0001 7.57998 16.4201 3.99998 12.0001 3.99998C10.6101 3.99998 9.31011 4.34998 8.17011 4.96998Z" />
    </Svg>
  );
};
