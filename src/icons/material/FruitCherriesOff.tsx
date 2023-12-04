import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FruitCherriesOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.5002L2.39998 1.7002L1.09998 3.0002L8.69998 10.6002C8.29998 11.6002 7.89998 12.5002 7.59998 13.0002C5.59998 13.2002 3.99998 14.9002 3.99998 17.0002C3.99998 19.2002 5.79998 21.0002 7.99998 21.0002C9.09998 21.0002 9.99998 20.6002 10.7 19.9002C10.3 19.0002 9.99998 18.0002 9.99998 17.0002C9.99998 16.0002 10.3 15.0002 10.7 14.1002C10.3 13.7002 9.69998 13.4002 9.19998 13.2002C9.39997 12.8002 9.59997 12.3002 9.89997 11.7002L12.8 14.6002C12.3 15.3002 12 16.1002 12 17.0002C12 19.2002 13.8 21.0002 16 21.0002C16.9 21.0002 17.7 20.7002 18.3 20.2002L20.8 22.7002L22.1 21.5002ZM7.99998 15.5002C7.19998 15.5002 6.49998 16.2002 6.49998 17.0002H5.49998C5.49998 15.6002 6.59998 14.5002 7.99998 14.5002V15.5002ZM14.5 17.0002H13.5C13.5 16.5002 13.6 16.1002 13.8 15.7002L14.6 16.5002C14.5 16.7002 14.5 16.8002 14.5 17.0002ZM20 16.8002L16.2 13.0002C18.2 13.1002 19.9 14.8002 20 16.8002ZM11.3 8.1002L10.1 6.9002C10.7 5.1002 11.2 3.3002 11.2 2.0002L12.6 1.9002C12.7 2.3002 12.7 2.8002 12.8 3.4002C13.4 3.3002 15.5 3.3002 17.8 5.1002C20.5 7.10019 19.8 10.9002 19.8 10.9002C19.8 10.9002 17.4 11.3002 14.7 9.2002L13.8 8.3002C14.1 9.5002 14.5 10.7002 14.9 11.7002L12.6 9.4002C12.3 8.4002 12.1 7.4002 11.9 6.4002C11.7 7.0002 11.5 7.6002 11.3 8.1002Z" />
    </Svg>
  );
};
