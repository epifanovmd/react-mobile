import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MathIntegralIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.5 19.1001C11.3 20.2001 10.9 21.0001 10.2 21.5001C9.5 22.0001 8.6 22.1001 7.5 21.9001C7.1 21.8001 6.3 21.7001 6 21.5001L6.5 20.0001C6.8 20.1001 7.4 20.3001 7.7 20.3001C8.8 20.5001 9.4 20.0001 9.6 18.8001L12 5.20008C12.2 4.00008 12.7 3.20008 13.4 2.60008C14.1 2.10008 15.1 1.90008 16.2 2.10008C16.6 2.20008 17.4 2.30008 18 2.60008L17.5 4.00008C17.3 3.90008 16.6 3.80008 16.3 3.70008C15 3.50008 14.3 4.10008 14 5.60008L11.5 19.1001Z" />
    </Svg>
  );
};
