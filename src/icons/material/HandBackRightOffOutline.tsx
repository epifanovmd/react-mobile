import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandBackRightOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.46L2.38999 1.73L1.10999 3L6.99999 8.89V10.39C6.65999 10.08 6.23999 9.85 5.77999 9.73L4.99999 9.5C4.17999 9.29 3.30999 9.61 2.81999 10.35C2.43999 10.92 2.41999 11.66 2.66999 12.3L5.22999 18.73C6.49999 21.91 9.56999 24 13 24C15.5 24 17.7 22.85 19.17 21.06L20.84 22.73L22.11 21.46ZM13 22C10.39 22 8.04999 20.41 7.08999 18L4.49999 11.45L4.99999 11.59C5.49999 11.71 5.84999 12.05 5.99999 12.5L6.99999 15H8.99999V10.89L17.75 19.64C16.66 21.07 14.94 22 13 22ZM8.99999 5.8L7.08999 3.89C7.35999 2.8 8.32999 2 9.49999 2C9.68999 2 9.86999 2 10.04 2.06C10.25 0.89 11.27 0 12.5 0C13.56 0 14.46 0.66 14.83 1.59C15.04 1.53 15.27 1.5 15.5 1.5C16.88 1.5 18 2.62 18 4V4.55C18.16 4.5 18.33 4.5 18.5 4.5C19.88 4.5 21 5.62 21 7V16C21 16.56 20.94 17.11 20.83 17.63L19 15.8V7C19 6.72 18.78 6.5 18.5 6.5C18.22 6.5 18 6.72 18 7V12H16V4C16 3.72 15.78 3.5 15.5 3.5C15.22 3.5 15 3.72 15 4V11.8L13 9.8V2.5C13 2.22 12.78 2 12.5 2C12.22 2 12 2.22 12 2.5V8.8L9.99999 6.8V4.5C9.99999 4.22 9.77999 4 9.49999 4C9.21999 4 8.99999 4.22 8.99999 4.5V5.8Z" />
    </Svg>
  );
};
