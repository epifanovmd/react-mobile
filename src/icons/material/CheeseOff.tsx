import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheeseOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.49995 1.7002L2.19995 3.0002L6.09995 6.9002V9.0002C7.19995 9.2002 8.09995 10.2002 8.09995 11.5002C8.09995 12.8002 7.19995 13.7002 6.09995 14.0002V21.0002L12.1 17.5002C12.1 16.7002 12.8 16.0002 13.6 16.0002C13.9 16.0002 14.2 16.1002 14.4 16.2002L15.1 15.8002L20.2999 21.0002L21.6 19.7002L3.49995 1.7002ZM10.1 16.0002C9.59995 16.0002 9.09995 15.5002 9.09995 15.0002C9.09995 14.5002 9.59995 14.0002 10.1 14.0002C10.6 14.0002 11.1 14.5002 11.1 15.0002C11.1 15.5002 10.6 16.0002 10.1 16.0002ZM13.8 9.5002L9.89995 5.6002C10.2 5.9002 10.6 6.0002 11.1 6.0002C12.1 6.0002 12.9 5.2002 13.1 4.2002C15.4 5.2002 17.5999 6.60019 19.2999 8.4002C19.1999 8.60019 19.1 8.7002 19.1 8.9002C19.1 9.4002 19.6 9.9002 20.1 9.9002C20.3 9.9002 20.4 9.9002 20.5 9.8002C21 10.4002 21.4 11.1002 21.7999 11.8002L18.2999 13.8002L16.6 12.1002C16.9 11.8002 17.1 11.3002 17.1 10.8002C17.1 9.7002 16.2 8.8002 15.1 8.8002C14.6 9.0002 14.1 9.2002 13.8 9.5002ZM9.49995 5.2002L7.29995 3.0002C7.99995 3.0002 8.59995 3.1002 9.19995 3.2002C9.09995 3.5002 9.09995 3.7002 9.09995 4.0002C9.09995 4.4002 9.19995 4.9002 9.49995 5.2002Z" />
    </Svg>
  );
};
