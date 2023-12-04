import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.5002L2.4001 1.7002L1.1001 3.0002L2.6001 4.5002C2.3001 4.9002 2.0001 5.4002 2.0001 6.0002V18.0002C2.0001 19.1002 2.9001 20.0002 4.0001 20.0002H18.1001L20.8001 22.7002L22.1001 21.5002ZM4.0001 18.0002V8.0002L9.6001 11.5002L16.1001 18.0002H4.0001ZM9.2001 6.0002L7.2001 4.0002H20.0001C21.1001 4.0002 22.0001 4.9002 22.0001 6.0002V18.0002C22.0001 18.2002 22.0001 18.5002 21.9001 18.7002L20.0001 16.8002V8.0002L14.6001 11.4002L13.4001 10.2002L20.0001 6.0002H9.2001Z" />
    </Svg>
  );
};
