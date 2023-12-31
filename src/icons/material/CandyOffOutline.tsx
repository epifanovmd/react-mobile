import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CandyOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.5002L2.39998 1.7002L1.09998 3.0002L7.69998 9.6002C6.59998 11.5002 6.89998 14.0002 8.49998 15.6002C10.1 17.2002 12.6 17.5002 14.5 16.4002L20.9 22.8002L22.1 21.5002ZM9.89997 14.1002C9.09997 13.3002 8.79997 12.1002 9.19998 11.0002L13 14.8002C11.9 15.2002 10.7 15.0002 9.89997 14.1002ZM14.8 6.3002C14.5 5.2002 14.6 3.6002 15.9 2.4002C16.8 3.3002 17.3 4.3002 17.4 5.3002C18.5 4.6002 19.4 4.5002 19.4 4.5002C19.3 5.3002 19 6.0002 18.6 6.5002C19.6 6.7002 20.7 7.2002 21.5 8.0002C20.3 9.2002 18.7 9.4002 17.6 9.1002C17.3 7.8002 16.2 6.7002 14.8 6.3002ZM12.2 9.0002L10.4 7.2002C12.1 6.6002 14.1 7.0002 15.5 8.4002C16.9 9.80019 17.3 11.7002 16.7 13.5002L15 11.8002C14.9 11.1002 14.7 10.4002 14.1 9.9002C13.5 9.4002 12.9 9.1002 12.2 9.0002ZM9.19998 17.7002C9.49998 18.8002 9.39998 20.4002 8.09998 21.6002C7.19998 20.7002 6.69998 19.7002 6.59998 18.7002C5.49998 19.4002 4.59998 19.5002 4.59998 19.5002C4.69998 18.7002 4.99998 18.0002 5.39998 17.5002C4.39998 17.3002 3.29998 16.8002 2.49998 16.0002C3.69998 14.8002 5.29998 14.6002 6.39998 14.9002C6.69998 16.2002 7.79997 17.3002 9.19998 17.7002Z" />
    </Svg>
  );
};
