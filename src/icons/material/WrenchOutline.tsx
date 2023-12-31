import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WrenchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.61 18.9995L13.53 9.90948C14.46 7.56948 14 4.80948 12.09 2.90948C9.78996 0.609483 6.20996 0.399483 3.65996 2.25948L7.49996 6.10948L6.07996 7.49948L2.24996 3.68948C0.389961 6.22948 0.599962 9.81948 2.89996 12.1095C4.75996 13.9695 7.46996 14.4595 9.78996 13.5895L18.9 22.6995C19.29 23.0895 19.92 23.0895 20.31 22.6995L22.61 20.3995C23 19.9995 23 19.3895 22.61 18.9995ZM19.61 20.5895L10.15 11.1295C9.53996 11.5795 8.85996 11.8495 8.14996 11.9495C6.78996 12.1495 5.35996 11.7395 4.31996 10.6995C3.36996 9.75948 2.92996 8.49948 2.99996 7.25948L6.08996 10.3495L10.33 6.10948L7.23996 2.99948C8.49996 2.94948 9.72996 3.38948 10.68 4.32948C11.76 5.40948 12.17 6.89948 11.92 8.28948C11.8 8.99948 11.5 9.65948 11.04 10.2495L20.5 19.6995L19.61 20.5895Z" />
    </Svg>
  );
};
