import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountClockOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 14H17.5V16.82L19.94 18.23L19.19 19.53L16 17.69V14ZM17 12C15.6739 12 14.4021 12.5268 13.4645 13.4645C12.5268 14.4021 12 15.6739 12 17C12 18.3261 12.5268 19.5979 13.4645 20.5355C14.4021 21.4732 15.6739 22 17 22C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17C22 15.6739 21.4732 14.4021 20.5355 13.4645C19.5979 12.5268 18.3261 12 17 12ZM17 10C18.8565 10 20.637 10.7375 21.9497 12.0503C23.2625 13.363 24 15.1435 24 17C24 18.8565 23.2625 20.637 21.9497 21.9497C20.637 23.2625 18.8565 24 17 24C14.21 24 11.8 22.36 10.67 20H1V17C1 14.34 6.33 13 9 13C9.6 13 10.34 13.07 11.12 13.2C12.36 11.28 14.53 10 17 10ZM10 17C10 16.3 10.1 15.62 10.29 15C9.87 14.93 9.43 14.9 9 14.9C6.03 14.9 2.9 16.36 2.9 17V18.1H10.09C10.03 17.74 10 17.37 10 17ZM9 4C10.0609 4 11.0783 4.42143 11.8284 5.17157C12.5786 5.92172 13 6.93913 13 8C13 9.06087 12.5786 10.0783 11.8284 10.8284C11.0783 11.5786 10.0609 12 9 12C7.93913 12 6.92172 11.5786 6.17157 10.8284C5.42143 10.0783 5 9.06087 5 8C5 6.93913 5.42143 5.92172 6.17157 5.17157C6.92172 4.42143 7.93913 4 9 4ZM9 5.9C8.44305 5.9 7.9089 6.12125 7.51508 6.51508C7.12125 6.9089 6.9 7.44305 6.9 8C6.9 8.55695 7.12125 9.0911 7.51508 9.48492C7.9089 9.87875 8.44305 10.1 9 10.1C9.55695 10.1 10.0911 9.87875 10.4849 9.48492C10.8788 9.0911 11.1 8.55695 11.1 8C11.1 7.44305 10.8788 6.9089 10.4849 6.51508C10.0911 6.12125 9.55695 5.9 9 5.9Z" />
    </Svg>
  );
};
