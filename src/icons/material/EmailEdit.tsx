import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 12.13C20.85 12.14 20.71 12.19 20.61 12.3L19.61 13.3L21.66 15.3L22.66 14.3C22.88 14.09 22.88 13.74 22.66 13.53L21.42 12.3C21.32 12.19 21.18 12.14 21.04 12.13H21ZM19.04 13.88L13 19.94V22H15.06L21.12 15.93L19.04 13.88ZM20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H11V19.11L19.24 10.89C19.71 10.4 20.36 10.13 21.04 10.13C21.38 10.13 21.72 10.19 22.04 10.32V6C22.04 4.88 21.12 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6" />
    </Svg>
  );
};
