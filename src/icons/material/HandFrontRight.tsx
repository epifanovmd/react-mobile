import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandFrontRightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.75 8C19.06 8 18.5 8.56 18.5 9.25V15H18C16.35 15 15 16.35 15 18H14C14 15.96 15.53 14.28 17.5 14.03V3.25C17.5 2.56 16.94 2 16.25 2C15.56 2 15 2.56 15 3.25V11H14V1.25C14 0.56 13.44 0 12.75 0C12.06 0 11.5 0.56 11.5 1.25V11H10.5V2.75C10.5 2.06 9.94 1.5 9.25 1.5C8.56 1.5 8 2.06 8 2.75V12H7V5.75C7 5.06 6.44 4.5 5.75 4.5C5.06 4.5 4.5 5.06 4.5 5.75V15.75C4.5 20.31 8.19 24 12.75 24C17.31 24 21 20.31 21 15.75V9.25C21 8.56 20.44 8 19.75 8Z" />
    </Svg>
  );
};
