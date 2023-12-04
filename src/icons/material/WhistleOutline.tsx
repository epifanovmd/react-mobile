import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WhistleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.76 3.7L2.14 4.88L4.43 8C5.03748 7.6809 5.68249 7.43902 6.35 7.28L3.76 3.7ZM11 9V11H18V11.29L13 12.71V15.5C13 16.39 12.7361 17.26 12.2416 18.0001C11.7471 18.7401 11.0443 19.3169 10.2221 19.6575C9.39981 19.9981 8.49501 20.0872 7.6221 19.9135C6.74918 19.7399 5.94736 19.3113 5.31802 18.682C4.68869 18.0526 4.2601 17.2508 4.08647 16.3779C3.91284 15.505 4.00195 14.6002 4.34255 13.7779C4.68314 12.9557 5.25992 12.2529 5.99994 11.7584C6.73996 11.2639 7.60999 11 8.5 11H9V9H8.5C7.21442 9 5.95772 9.38122 4.8888 10.0954C3.81988 10.8097 2.98676 11.8248 2.49479 13.0126C2.00282 14.2003 1.87409 15.5072 2.1249 16.7681C2.3757 18.029 2.99477 19.1872 3.90381 20.0962C4.81285 21.0052 5.97104 21.6243 7.23192 21.8751C8.49279 22.1259 9.79973 21.9972 10.9874 21.5052C12.1752 21.0132 13.1903 20.1801 13.9046 19.1112C14.6188 18.0423 15 16.7856 15 15.5V13.91L22 12V9H11ZM16.24 3.7L13.85 7H16.32L17.86 4.88L16.24 3.7ZM9 2V7H11V2H9Z" />
    </Svg>
  );
};
