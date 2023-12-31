import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PokerChipIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 12C23 18.08 18.08 23 12 23C5.92 23 1 18.08 1 12C1 5.92 5.92 1 12 1C18.08 1 23 5.92 23 12ZM13 4.06C15.13 4.33 17.07 5.45 18.37 7.16L20.11 6.16C18.45 3.82 15.86 2.3 13 2V4.06ZM3.89 6.16L5.63 7.16C6.93 5.45 8.87 4.33 11 4.06V2C8.14 2.3 5.55 3.82 3.89 6.16ZM2.89 16.1L4.62 15.1C3.79 13.12 3.79 10.88 4.62 8.9L2.89 7.9C1.7 10.5 1.7 13.5 2.89 16.1ZM11 19.94C8.87 19.67 6.93 18.55 5.63 16.84L3.89 17.84C5.55 20.18 8.14 21.7 11 22V19.94ZM20.11 17.84L18.37 16.84C17.07 18.55 15.13 19.67 13 19.94V21.94C15.85 21.65 18.44 20.16 20.11 17.84ZM21.11 16.1C22.3 13.5 22.3 10.5 21.11 7.9L19.38 8.9C20.21 10.88 20.21 13.12 19.38 15.1L21.11 16.1ZM15 12L12 7L9 12L12 17L15 12Z" />
    </Svg>
  );
};
