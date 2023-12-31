import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CandyOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8 22.7002L14.4 16.3002C12.5 17.4002 9.99998 17.1002 8.39998 15.5002C6.79998 13.9002 6.49998 11.4002 7.59998 9.5002L1.09998 3.0002L2.39998 1.7002L22.1 21.4002L20.8 22.7002ZM15.5 8.5002C14.1 7.1002 12.2 6.7002 10.4 7.3002L16.7 13.6002C17.3 11.8002 16.9 9.8002 15.5 8.5002ZM17.7 9.2002C18.8 9.5002 20.4 9.3002 21.6 8.1002C20.8 7.3002 19.7 6.80019 18.7 6.60019C19.1 6.0002 19.4 5.3002 19.5 4.6002C19.5 4.6002 18.5 4.7002 17.5 5.4002C17.4 4.4002 16.9 3.3002 16 2.5002C14.8 3.7002 14.6 5.3002 14.9 6.4002C16.2 6.7002 17.3 7.8002 17.7 9.2002ZM6.29998 14.8002C5.19998 14.5002 3.59998 14.7002 2.39998 15.9002C3.19998 16.7002 4.29998 17.2002 5.29998 17.4002C4.89998 18.0002 4.59998 18.7002 4.49998 19.4002C4.49998 19.4002 5.49998 19.3002 6.49998 18.6002C6.59998 19.6002 7.09998 20.7002 7.99998 21.5002C9.19998 20.3002 9.39998 18.7002 9.09998 17.6002C7.79998 17.3002 6.69998 16.2002 6.29998 14.8002Z" />
    </Svg>
  );
};
