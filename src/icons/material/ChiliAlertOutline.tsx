import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChiliAlertOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 8.28L12.75 9L11 8L9.25 9L8 8.28C7.4 8.63 7 9.27 7 10V11C7 20 15 22 15 22V10C15 9.27 14.6 8.63 14 8.28ZM13 18.87C11.23 17.69 9.17 15.44 9 11.43L11 10.3L13 11.45V18.87ZM9.25 7.5L7.73 6.63C8.26 5.7 9.03 5 9.94 4.69C9.8 4.29 9.44 4 9 4V2C10.54 2 11.79 3.16 11.97 4.65C12.91 4.94 13.72 5.66 14.27 6.63L12.75 7.5L11 6.5L9.25 7.5ZM19 7V13H17V7H19ZM17 15H19V17H17V15Z" />
    </Svg>
  );
};
