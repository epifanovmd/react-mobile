import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FacebookWorkplaceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.69 16.12C19.42 16.43 18.95 16.92 18.19 16.92C17.13 16.92 16.78 16.15 16.46 15.34L14.86 11.41L13.26 15.34C13 16 12.7 16.92 11.53 16.92C10.36 16.92 10.07 16 9.79002 15.34L7.11002 8.72H9.37002L11.53 14.17L13.14 10.2C13.39 9.57 13.69 8.62 14.86 8.62C16 8.62 16.32 9.57 16.58 10.2L18.33 14.5C19.22 13.14 19.6 11.5 19.38 9.89C19.16 8.28 18.37 6.8 17.14 5.73C15.92 4.66 14.34 4.06 12.72 4.06C11.03 4.05 9.39002 4.58 8.00002 5.56C6.66002 6.55 5.64002 7.94 5.12002 9.54C4.60002 11.14 4.60002 12.87 5.12002 14.47C5.64002 16.07 6.66002 17.46 8.03002 18.44C9.40002 19.43 11.04 19.95 12.72 19.94C13.45 19.94 14.17 19.84 14.87 19.64V21.75C14.16 21.91 13.44 22 12.72 22C10.61 22 8.54002 21.34 6.82002 20.1C5.10002 18.86 3.82002 17.11 3.17002 15.1C2.50002 13.09 2.50002 10.92 3.16002 8.9C3.82002 6.89 5.10002 5.14 6.82002 3.9C8.53002 2.66 10.6 2 12.72 2C17.56 2 21.5 5.94 21.5 10.79C21.5 12.71 20.86 14.59 19.69 16.12Z" />
    </Svg>
  );
};
