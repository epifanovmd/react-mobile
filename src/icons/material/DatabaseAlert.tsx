import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 7C18 9.21 14.42 11 10 11C5.58 11 2 9.21 2 7C2 4.79 5.58 3 10 3C14.42 3 18 4.79 18 7ZM10 18C5.58 18 2 16.21 2 14V17C2 19.21 5.58 21 10 21C14.42 21 18 19.21 18 17V14C18 16.21 14.42 18 10 18ZM10 13C5.58 13 2 11.21 2 9V12C2 14.21 5.58 16 10 16C14.42 16 18 14.21 18 12V9C18 11.21 14.42 13 10 13ZM20 17H22V15H20V17ZM20 7V13H22V7H20Z" />
    </Svg>
  );
};
