import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarabinerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.00006 17.5C8.00006 18.33 7.33006 19 6.50006 19C5.67006 19 5.00006 18.33 5.00006 17.5C5.00006 16.67 5.67006 16 6.50006 16C7.33006 16 8.00006 16.67 8.00006 17.5ZM18.0001 5.59C17.7901 3.54 16.1801 2 14.2401 2H8.88006C6.95006 2 5.36006 3.5 5.15006 5.53L5.00006 6.59C4.92006 7.34 5.50006 8 6.24006 8C6.87006 8 7.39006 7.53 7.47006 6.91L7.61006 5.82C7.68006 5.07 8.23006 4.5 8.88006 4.5H14.2401C14.8901 4.5 15.4401 5.07 15.5001 5.82L16.5001 16.88C16.5901 17.74 16.0001 18.5 15.2501 18.5L10.0401 17.82C9.95006 18.77 9.50006 19.6 8.80006 20.18L14.9301 21H15.0901H15.2501C16.2701 21 17.2601 20.56 17.9601 19.78C18.7101 18.94 19.0901 17.8 19.0001 16.65L18.0001 5.59ZM11.6601 7.94C11.0801 7.57 10.3101 7.75 9.94006 8.34L6.39006 14C6.43006 14 6.46006 14 6.50006 14C7.38006 14 8.18006 14.34 8.80006 14.88L12.0601 9.66C12.4301 9.08 12.2501 8.31 11.6601 7.94Z" />
    </Svg>
  );
};
