import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PeriodicTableIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 4V6H4V4H2ZM20 4V6H22V4H20ZM2 7V9H4V7H2ZM5 7V9H7V7H5ZM14 7V9H16V7H14ZM17 7V9H19V7H17ZM20 7V9H22V7H20ZM2 10V12H4V10H2ZM5 10V12H7V10H5ZM8 10V12H10V10H8ZM11 10V12H13V10H11ZM14 10V12H16V10H14ZM17 10V12H19V10H17ZM20 10V12H22V10H20ZM2 13V15H4V13H2ZM5 13V15H7V13H5ZM8 13V15H10V13H8ZM11 13V15H13V13H11ZM14 13V15H16V13H14ZM17 13V15H19V13H17ZM20 13V15H22V13H20ZM5 17V19H7V17H5ZM8 17V19H10V17H8ZM11 17V19H13V17H11ZM14 17V19H16V17H14ZM17 17V19H19V17H17Z" />
    </Svg>
  );
};
