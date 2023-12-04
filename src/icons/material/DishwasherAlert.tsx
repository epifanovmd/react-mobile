import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DishwasherAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V4C18 2.9 17.11 2 16 2ZM8 4C8.55 4 9 4.45 9 5C9 5.55 8.55 6 8 6C7.45 6 7 5.55 7 5C7 4.45 7.45 4 8 4ZM5 4C5.55 4 6 4.45 6 5C6 5.55 5.55 6 5 6C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4ZM16 20H4V8H16V20ZM12.67 15.33C12.69 16.03 12.41 16.71 11.91 17.21C10.86 18.26 9.15 18.27 8.09 17.21C7.59 16.71 7.31 16.03 7.33 15.33C7.4 14.62 7.63 13.94 8 13.33C8.37 12.5 8.81 11.73 9.33 11L10 10C11.79 12.59 12.67 14.36 12.67 15.33ZM20 15H22V17H20V15ZM20 7H22V13H20V7Z" />
    </Svg>
  );
};
