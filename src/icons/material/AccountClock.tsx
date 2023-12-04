import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountClockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.63 14.1C12.23 10.58 16.38 9.03 19.9 10.63C23.42 12.23 24.97 16.38 23.37 19.9C22.24 22.4 19.75 24 17 24C14.3 24 11.83 22.44 10.67 20H1V18C1.06 16.86 1.84 15.93 3.34 15.18C4.84 14.43 6.72 14.04 9 14C9.57 14 10.11 14.05 10.63 14.1ZM9 4C10.12 4.03 11.06 4.42 11.81 5.17C12.56 5.92 12.93 6.86 12.93 8C12.93 9.14 12.56 10.08 11.81 10.83C11.06 11.58 10.12 11.95 9 11.95C7.88 11.95 6.94 11.58 6.19 10.83C5.44 10.08 5.07 9.14 5.07 8C5.07 6.86 5.44 5.92 6.19 5.17C6.94 4.42 7.88 4.03 9 4ZM17 22C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17C22 15.6739 21.4732 14.4021 20.5355 13.4645C19.5979 12.5268 18.3261 12 17 12C15.6739 12 14.4021 12.5268 13.4645 13.4645C12.5268 14.4021 12 15.6739 12 17C12 18.3261 12.5268 19.5979 13.4645 20.5355C14.4021 21.4732 15.6739 22 17 22ZM16 14H17.5V16.82L19.94 18.23L19.19 19.53L16 17.69V14Z" />
    </Svg>
  );
};
