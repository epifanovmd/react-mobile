import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GlobeModelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.36 2.63965L15.95 4.05965C17.26 5.36965 18 7.13965 18 8.99965C18 10.8562 17.2625 12.6366 15.9498 13.9494C14.637 15.2621 12.8565 15.9996 11 15.9996C9.15001 15.9996 7.37001 15.2596 6.06001 13.9496L4.64001 15.3596C6.08001 16.7996 7.97001 17.7096 10 17.9296V19.9996H6.00001V21.9996H16V19.9996H12V17.9396C16.55 17.4296 20 13.5796 20 8.99965C20 6.61965 19.05 4.32965 17.36 2.63965ZM11 3.49965C9.54132 3.49965 8.14238 4.07911 7.11093 5.11056C6.07948 6.14201 5.50001 7.54096 5.50001 8.99965C5.50001 10.4583 6.07948 11.8573 7.11093 12.8887C8.14238 13.9202 9.54132 14.4996 11 14.4996C12.4587 14.4996 13.8577 13.9202 14.8891 12.8887C15.9206 11.8573 16.5 10.4583 16.5 8.99965C16.5 7.54096 15.9206 6.14201 14.8891 5.11056C13.8577 4.07911 12.4587 3.49965 11 3.49965ZM11 5.49965C12.94 5.49965 14.5 7.06965 14.5 8.99965C14.5 9.92791 14.1313 10.8181 13.4749 11.4745C12.8185 12.1309 11.9283 12.4996 11 12.4996C10.0718 12.4996 9.18152 12.1309 8.52514 11.4745C7.86876 10.8181 7.50001 9.92791 7.50001 8.99965C7.50001 8.07139 7.86876 7.18115 8.52514 6.52477C9.18152 5.8684 10.0718 5.49965 11 5.49965Z" />
    </Svg>
  );
};
