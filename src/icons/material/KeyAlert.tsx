import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 6.5C4 4 6 2 8.5 2C11 2 13 4 13 6.5C13 8.46 11.75 10.13 10 10.74V15H13V18H10V22H7V10.74C5.25 10.13 4 8.46 4 6.5ZM7 6.5C7 7.33 7.67 8 8.5 8C9.33 8 10 7.33 10 6.5C10 5.67 9.33 5 8.5 5C7.67 5 7 5.67 7 6.5ZM18 7H20V13H18V7ZM18 17H20V15H18" />
    </Svg>
  );
};
