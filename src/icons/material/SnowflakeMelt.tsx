import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowflakeMeltIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 17.85C8 19.04 7.11 20 6 20C4.89 20 4 19.04 4 17.85C4 16.42 6 14 6 14C6 14 8 16.42 8 17.85ZM16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46ZM9.5 12V10.56L12 9.11L14.5 10.56V12H9.5ZM20 17.85C20 19.04 19.11 20 18 20C16.89 20 16 19.04 16 17.85C16 16.42 18 14 18 14C18 14 20 16.42 20 17.85ZM14 20.85C14 22.04 13.11 23 12 23C10.89 23 10 22.04 10 20.85C10 19.42 12 17 12 17C12 17 14 19.42 14 20.85Z" />
    </Svg>
  );
};
