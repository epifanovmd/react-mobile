import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength3LockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 10C19.68 10 20.32 10.14 20.91 10.39L23.64 7C20.31 4.41 16.2 3 12 3C7.77999 3 3.68999 4.41 0.36499 7C4.38999 12.06 7.87999 16.37 12 21.5L13 20.24V17.2C13 16.24 13.5 15.34 14.2 14.74V14.5C14.2 12.06 16.4 10 19 10ZM12 8C8.99999 8 6.66999 9 5.19999 9.84L3.25999 7.44C5.89999 5.85 8.90999 5 12 5C15.09 5 18.08 5.86 20.7 7.45L18.76 9.88C17.25 9 14.87 8 12 8ZM21.8 16V14.5C21.8 13.1 20.4 12 19 12C17.6 12 16.2 13.1 16.2 14.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.8 16ZM20.5 16H17.5V14.5C17.5 13.7 18.2 13.2 19 13.2C19.8 13.2 20.5 13.7 20.5 14.5V16Z" />
    </Svg>
  );
};
