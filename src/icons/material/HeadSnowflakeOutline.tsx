import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadSnowflakeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.9999 3C16.8799 3 19.9999 6.14 19.9999 10C19.9999 12.8 18.3699 15.19 15.9999 16.31V21H8.99992V18H7.99992C6.88992 18 5.99992 17.11 5.99992 16V13H4.49992C4.07992 13 3.83992 12.5 4.07992 12.19L5.99992 9.66C6.18992 5.95 9.22992 3 12.9999 3ZM12.9999 1C8.40992 1 4.60992 4.42 4.05992 8.9L2.49992 11H2.46992L2.44992 11.03C1.89992 11.79 1.82992 12.79 2.25992 13.62C2.61992 14.31 3.25992 14.79 3.99992 14.94V16C3.99992 17.85 5.27992 19.42 6.99992 19.87V23H17.9999V17.5C20.4999 15.83 21.9999 13.06 21.9999 10C21.9999 5.03 17.9599 1 12.9999 1ZM17.3299 9.3L15.3699 9.81L16.8099 11.27C17.1599 11.61 17.1599 12.19 16.8099 12.54C16.4599 12.89 15.8799 12.89 15.5399 12.54L14.0899 11.1L13.5699 13.06C13.4499 13.55 12.9599 13.82 12.4999 13.7C11.9999 13.57 11.7199 13.08 11.8399 12.59L12.3699 10.63L10.4099 11.16C9.91992 11.28 9.42992 11 9.29992 10.5C9.17992 10.05 9.45992 9.55 9.93992 9.43L11.8999 8.91L10.4599 7.46C10.1099 7.12 10.1099 6.55 10.4599 6.19C10.8099 5.84 11.3899 5.84 11.7299 6.19L13.1899 7.63L13.6999 5.67C13.8199 5.18 14.3199 4.9 14.7899 5.03C15.2799 5.16 15.5599 5.65 15.4299 6.13L14.8999 8.1L16.8699 7.57C17.3499 7.44 17.8399 7.72 17.9699 8.21C18.0999 8.68 17.8199 9.18 17.3299 9.3Z" />
    </Svg>
  );
};
