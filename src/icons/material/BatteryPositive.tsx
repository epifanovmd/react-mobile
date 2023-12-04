import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryPositiveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.67 4C12.0227 4 12.361 4.14012 12.6105 4.38955C12.8599 4.63897 13 4.97726 13 5.33V20.67C13 21.4 12.4 22 11.67 22H2.33C1.6 22 1 21.4 1 20.67V5.33C1 4.97726 1.14012 4.63897 1.38955 4.38955C1.63897 4.14012 1.97726 4 2.33 4H4V2H10V4H11.67ZM23 14H20V17H18V14H15V12H18V9H20V12H23V14ZM3 13H11V6H3V13Z" />
    </Svg>
  );
};
