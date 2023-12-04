import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandFrontLeftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 9.25V15.75C3 20.31 6.69 24 11.25 24C15.81 24 19.5 20.31 19.5 15.75V5.75C19.5 5.06 18.94 4.5 18.25 4.5C17.56 4.5 17 5.06 17 5.75V12H16V2.75C16 2.06 15.44 1.5 14.75 1.5C14.06 1.5 13.5 2.06 13.5 2.75V11H12.5V1.25C12.5 0.56 11.94 0 11.25 0C10.56 0 10 0.56 10 1.25V11H9V3.25C9 2.56 8.44 2 7.75 2C7.06 2 6.5 2.56 6.5 3.25V14.03C8.47 14.28 10 15.96 10 18H9C9 16.35 7.65 15 6 15H5.5V9.25C5.5 8.56 4.94 8 4.25 8C3.56 8 3 8.56 3 9.25Z" />
    </Svg>
  );
};
