import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FruitCitrusOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.5002L2.39998 1.7002L1.09998 3.0002L4.39998 6.3002C3.39998 7.5002 2.89998 8.9002 2.79998 10.2002C2.09998 10.7002 1.79998 11.5002 2.09998 12.3002C2.39998 13.1002 3.19998 13.6002 3.99998 13.6002C5.09998 14.9002 6.89998 15.7002 8.99998 15.9002C9.09998 14.5002 9.59998 13.3002 10.3 12.2002L11.8 13.7002C11.3 14.5002 11 15.5002 11 16.5002C11 19.5002 13.5 22.0002 16.5 22.0002C17.5 22.0002 18.5 21.7002 19.3 21.2002L20.8 22.7002L22.1 21.5002ZM13 16.5002C13 16.0002 13.1 15.6002 13.3 15.1002L15 16.8002L13.3 18.0002C13.1 17.5002 13 17.0002 13 16.5002ZM13.9 18.8002L15.7 17.6002L16 17.9002V20.0002C15.2 19.8002 14.4 19.4002 13.9 18.8002ZM17 19.9002V18.9002L17.8 19.7002C17.5 19.8002 17.3 19.9002 17 19.9002ZM20 16.8002V16.5002C20 16.0002 19.9 15.5002 19.7 15.0002L18.8 15.6002L18.1 14.9002L19.1 14.2002C18.6 13.6002 17.8 13.2002 17 13.0002V13.8002L14.6 11.4002C15.2 11.2002 15.9 11.0002 16.5 11.0002C19.5 11.0002 22 13.5002 22 16.5002C22 17.2002 21.9 17.8002 21.6 18.4002L20 16.8002ZM13 9.8002L7.09998 3.9002C7.89998 3.4002 8.79997 3.0002 9.69998 2.7002C13.8 1.3002 18 2.1002 20 4.4002C20.8 4.4002 21.6 4.9002 21.9 5.7002C22.2 6.5002 21.9 7.3002 21.2 7.8002C21.2 8.6002 21 9.4002 20.6 10.2002C19.4 9.5002 18 9.0002 16.5 9.0002C15.3 9.0002 14.1 9.3002 13 9.8002Z" />
    </Svg>
  );
};
