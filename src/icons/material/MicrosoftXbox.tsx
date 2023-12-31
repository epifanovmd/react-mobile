import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftXboxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.43 3.72C6.5 3.66 6.57 3.6 6.62 3.56C8.18 2.55 10 2 12 2C13.88 2 15.64 2.5 17.14 3.42C17.25 3.5 17.54 3.69 17.7 3.88C16.25 2.28 12 5.7 12 5.7C10.5 4.57 9.17 3.8 8.16 3.5C7.31 3.29 6.73 3.5 6.46 3.7L6.43 3.72ZM19.34 5.21C19.29 5.16 19.24 5.11 19.2 5.06C18.84 4.66 18.38 4.56 18 4.59C17.61 4.71 15.9 5.32 13.8 7.31C13.8 7.31 16.17 9.61 17.62 11.96C19.07 14.31 19.93 16.16 19.4 18.73C21 16.95 22 14.59 22 12C22 9.38 21 7 19.34 5.21ZM15.73 12.96C15.08 12.24 14.13 11.21 12.86 9.95C12.59 9.68 12.3 9.4 12 9.1C12 9.1 11.53 9.56 10.93 10.17C10.16 10.94 9.17 11.95 8.61 12.54C7.63 13.59 4.81 16.89 4.65 18.74C4.65 18.74 4 17.28 5.4 13.89C6.3 11.68 9 8.36 10.15 7.28C10.15 7.28 9.12 6.14 7.82 5.35L7.77 5.32C7.14 4.95 6.46 4.66 5.8 4.62C5.13 4.67 4.71 5.16 4.71 5.16C3.03 6.95 2 9.35 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.93 22 17.57 20.74 19.4 18.73C19.4 18.73 19.19 17.4 17.84 15.5C17.53 15.07 16.37 13.69 15.73 12.96Z" />
    </Svg>
  );
};
