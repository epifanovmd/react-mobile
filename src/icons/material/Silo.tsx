import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SiloIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.5 2C11.85 2 14.6 4.53 14.96 7.78L22 12V14L20 12.8V22H18V11.6L15 9.8V22H13V9H4V22H2V8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2ZM8.5 4C6.54 4 4.87 5.25 4.26 7H12.74C12.13 5.25 10.46 4 8.5 4ZM6 11H11V13H6V11ZM6 15H11V17H6V15ZM6 19H11V21H6V19Z" />
    </Svg>
  );
};
