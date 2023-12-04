import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailOpenMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 7.99965L14 12.9996L22 7.99965L14 2.99965L6 7.99965ZM24 7.99965V17.9996C24 18.5301 23.7893 19.0388 23.4142 19.4139C23.0391 19.7889 22.5304 19.9996 22 19.9996H6C5.46957 19.9996 4.96086 19.7889 4.58579 19.4139C4.21071 19.0388 4 18.5301 4 17.9996V7.99965C4 7.26965 4.39 6.63965 4.97 6.28965L14 0.639648L23.03 6.28965C23.61 6.63965 24 7.26965 24 7.99965ZM2 7.99965V21.9996H20V23.9996H2C1.46957 23.9996 0.960859 23.7889 0.585786 23.4139C0.210714 23.0388 0 22.5301 0 21.9996V7.99965H2Z" />
    </Svg>
  );
};
