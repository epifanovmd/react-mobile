import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatColorMarkerCancelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 8.0002C14 8.0002 12 10.0002 12 12.5002C12 15.0002 14 17.0002 16.5 17.0002C19 17.0002 21 15.0002 21 12.5002C21 10.0002 19 8.0002 16.5 8.0002ZM16.5 15.5002C14.8 15.5002 13.5 14.2002 13.5 12.5002C13.5 11.9002 13.7 11.4002 13.9 11.0002L18 15.1002C17.6 15.3002 17.1 15.5002 16.5 15.5002ZM19.1 14.0002L15 9.90019C15.4 9.60019 15.9 9.5002 16.5 9.5002C18.2 9.5002 19.5 10.8002 19.5 12.5002C19.5 13.1002 19.3 13.6002 19.1 14.0002ZM12.1 7.70019L10.6 6.2002L13.9 2.9002C14.5 2.3002 15.4 2.3002 16 2.9002L18.2 5.0002C18.6 5.4002 18.7 5.8002 18.6 6.3002C18 6.1002 17.3 6.0002 16.6 6.0002C14.8 6.0002 13.3 6.70019 12.1 7.70019ZM10.5 14.9002L9 16.3002C8.4 16.9002 7.5 16.9002 6.9 16.3002L6.2 17.0002H2L4.8 14.2002C4.2 13.6002 4.2 12.7002 4.8 12.1002L9.5 7.4002L11.1 9.0002C10.4 10.0002 10 11.2002 10 12.5002C10 13.3002 10.2 14.1002 10.5 14.9002Z" />
    </Svg>
  );
};
