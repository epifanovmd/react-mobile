import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChessBishopIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 22H5V20H19V22ZM17.16 8.26C18.22 9.63 18.86 11.28 19 13C19 15.76 15.87 18 12 18C8.13 18 5 15.76 5 13C5 10.62 7.33 6.39 10.46 5.27C10.16 4.91 10 4.46 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.46 13.84 4.91 13.54 5.27C14.4 5.6 15.18 6.1 15.84 6.74L11.29 11.29L12.71 12.71L17.16 8.26Z" />
    </Svg>
  );
};
