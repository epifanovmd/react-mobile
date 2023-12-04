import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CounterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4ZM4 6V18H11V6H4ZM20 18V6H18.76C19 6.54 18.95 7.07 18.95 7.13C18.88 7.8 18.41 8.5 18.24 8.75L15.91 11.3L19.23 11.28L19.24 12.5L14.04 12.47L14 11.47C14 11.47 17.05 8.24 17.2 7.95C17.34 7.67 17.91 6 16.5 6C15.27 6.05 15.41 7.3 15.41 7.3L13.87 7.31C13.87 7.31 13.88 6.65 14.25 6H13V18H15.58L15.57 17.14L16.54 17.13C16.54 17.13 17.45 16.97 17.46 16.08C17.5 15.08 16.65 15.08 16.5 15.08C16.37 15.08 15.43 15.13 15.43 15.95H13.91C13.91 15.95 13.95 13.89 16.5 13.89C19.1 13.89 18.96 15.91 18.96 15.91C18.96 15.91 19 17.16 17.85 17.63L18.37 18H20ZM8.92 16H7.42V10.2L5.62 10.76V9.53L8.76 8.41H8.92V16Z" />
    </Svg>
  );
};
