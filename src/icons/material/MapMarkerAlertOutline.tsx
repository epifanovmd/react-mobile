import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerAlertOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4ZM11 6H13V11H11V6ZM11 13H13V15H11V13Z" />
    </Svg>
  );
};
