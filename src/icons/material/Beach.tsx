import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeachIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 18.54C17.13 18.21 19.5 18 22 18V22H5C5 21.35 8.2 19.86 13 18.9V12.4C12.16 12.65 11.45 13.21 11 13.95C10.39 12.93 9.27 12.25 8 12.25C6.73 12.25 5.61 12.93 5 13.95C5.03 10.37 8.5 7.43 13 7.04V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6C14.2652 6 14.5196 6.10536 14.7071 6.29289C14.8946 6.48043 15 6.73478 15 7V7.04C19.5 7.43 22.96 10.37 23 13.95C22.39 12.93 21.27 12.25 20 12.25C18.73 12.25 17.61 12.93 17 13.95C16.55 13.21 15.84 12.65 15 12.39V18.54ZM7 2C7 2.65661 6.87067 3.30679 6.6194 3.91342C6.36812 4.52005 5.99983 5.07124 5.53553 5.53553C5.07124 5.99983 4.52005 6.36812 3.91342 6.6194C3.30679 6.87067 2.65661 7 2 7V2H7Z" />
    </Svg>
  );
};
