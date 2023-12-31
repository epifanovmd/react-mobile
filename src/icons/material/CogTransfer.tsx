import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogTransferIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 18V16L9.99996 19.5L14 23V21H17V18H14ZM22 15.5L18 12V14H15V17H18V19L22 15.5ZM21.66 8.73L19.66 5.27C19.54 5.05 19.28 4.96 19.05 5.05L16.56 6.05C16.05 5.64 15.5 5.31 14.87 5.05L14.5 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.49996 2.42L9.12996 5.07C8.49996 5.33 7.95996 5.66 7.43996 6.07L4.99996 5.05C4.76996 4.96 4.49996 5.05 4.38996 5.27L2.38996 8.73C2.25996 8.94 2.30996 9.22 2.49996 9.37L4.56996 11C4.52996 11.33 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.67 4.56996 13L2.45996 14.63C2.25996 14.78 2.20996 15.06 2.33996 15.27L4.33996 18.73C4.44996 19 4.73996 19.11 4.99996 19L7.49996 18C7.73996 18.19 7.99996 18.37 8.25996 18.53L11.77 15.53C9.83996 15.4 8.37996 13.73 8.49996 11.8C8.64996 9.87 10.32 8.41 12.25 8.55C13.69 8.64 14.92 9.62 15.35 11H19.43L21.54 9.37C21.73 9.22 21.78 8.94 21.66 8.73Z" />
    </Svg>
  );
};
