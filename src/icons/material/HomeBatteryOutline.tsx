import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeBatteryOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.7 9H20V7.5H16V9H15.3C14.6 9 14 9.6 14 10.3V20.6C14 21.3 14.6 21.9 15.3 21.9H20.6C21.3 21.9 21.9 21.3 21.9 20.6V10.3C22 9.6 21.4 9 20.7 9ZM20 14H16V11H20V14ZM4 21V12H2L12 2L16 6H14.5V7.5L12 5L6 11V19H12.5V21H4Z" />
    </Svg>
  );
};
