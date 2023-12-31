import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherSnowyRainyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 18.67C18.5 19.96 17.5 21 16.25 21C15 21 14 19.96 14 18.67C14 17.12 16.25 14.5 16.25 14.5C16.25 14.5 18.5 17.12 18.5 18.67ZM4 17.36C3.86 16.82 4.18 16.25 4.73 16.11L7 15.5L5.33 13.86C4.93 13.46 4.93 12.81 5.33 12.4C5.73 12 6.4 12 6.79 12.4L8.45 14.05L9.04 11.8C9.18 11.24 9.75 10.92 10.29 11.07C10.85 11.21 11.17 11.78 11 12.33L10.42 14.58L12.67 14C13.22 13.83 13.79 14.15 13.93 14.71C14.08 15.25 13.76 15.82 13.2 15.96L10.95 16.55L12.6 18.21C13 18.6 13 19.27 12.6 19.67C12.2 20.07 11.54 20.07 11.15 19.67L9.5 18L8.89 20.27C8.75 20.83 8.18 21.14 7.64 21C7.08 20.86 6.77 20.29 6.91 19.74L7.5 17.5L5.26 18.09C4.71 18.23 4.14 17.92 4 17.36ZM1 11C1 9.67392 1.52678 8.40215 2.46447 7.46447C3.40215 6.52678 4.67392 6 6 6C7 3.65 9.3 2 12 2C15.43 2 18.24 4.66 18.5 8.03L19 8C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16C18.7348 16 18.4804 15.8946 18.2929 15.7071C18.1054 15.5196 18 15.2652 18 15C18 14.7348 18.1054 14.4804 18.2929 14.2929C18.4804 14.1054 18.7348 14 19 14C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10H17V9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8C5.20435 8 4.44129 8.31607 3.87868 8.87868C3.31607 9.44129 3 10.2044 3 11C3 11.85 3.35 12.61 3.91 13.16C4.27 13.55 4.26 14.16 3.88 14.54C3.5 14.93 2.85 14.93 2.47 14.54C1.56 13.63 1 12.38 1 11Z" />
    </Svg>
  );
};
