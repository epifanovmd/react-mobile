import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GitlabIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.83995L6.82995 3.33C6.71995 3 6.39995 2.75 6.03995 2.75C5.66995 2.75 5.34995 3 5.23995 3.33L3.12995 9.82V9.83L2.05995 13.11C1.89995 13.61 2.06995 14.15 2.49995 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11ZM8.14995 10.45L10.72 18.36L4.54995 10.45H8.14995ZM13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61L13.28 18.37ZM17.97 3.94L19.78 9.5H16.16L17.97 3.94ZM14.86 10.45L13.07 15.96L12 19.24L9.13995 10.45H14.86ZM6.02995 3.94L7.83995 9.5H4.22995L6.02995 3.94ZM3.04995 13.69C2.95995 13.62 2.91995 13.5 2.95995 13.4L3.74995 10.97L9.56995 18.42L3.04995 13.69ZM20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69Z" />
    </Svg>
  );
};
