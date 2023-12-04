import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartBellCurveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.96 11.31C10.82 8.1 11.5 6 13 6C14.5 6 15.18 8.1 16.04 11.31C17 14.92 18.1 19 22 19V17C19.8 17 19 14.54 17.97 10.8C17.08 7.46 16.15 4 13 4C9.85 4 8.92 7.46 8.03 10.8C7.03 14.54 6.2 17 4 17V2H2V22H22V20H4V19C7.9 19 9 14.92 9.96 11.31Z" />
    </Svg>
  );
};
