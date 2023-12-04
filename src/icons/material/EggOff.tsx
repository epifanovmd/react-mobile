import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EggOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.5002L2.39998 1.7002L1.09998 3.0002L6.09998 8.0002C5.09998 10.3002 4.49998 12.8002 4.49998 14.5002C4.49998 18.6002 7.89998 22.0002 12 22.0002C14.2 22.0002 16.2 21.0002 17.6 19.5002L20.8 22.7002L22.1 21.5002ZM19.5 14.5002C19.5 10.4002 16.1 2.0002 12 2.0002C10.5 2.0002 9.09998 3.1002 7.89998 4.7002L19.3 16.1002C19.4 15.6002 19.5 15.1002 19.5 14.5002Z" />
    </Svg>
  );
};
