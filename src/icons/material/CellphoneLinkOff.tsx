import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneLinkOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 7.9999H17C16.7348 7.9999 16.4804 8.10526 16.2929 8.2928C16.1054 8.48033 16 8.73469 16 8.9999V13.1799L18 15.1799V9.9999H22V16.9999H19.82L22.82 19.9999H23C23.2652 19.9999 23.5196 19.8945 23.7071 19.707C23.8946 19.5195 24 19.2651 24 18.9999V8.9999C24 8.73469 23.8946 8.48033 23.7071 8.2928C23.5196 8.10526 23.2652 7.9999 23 7.9999ZM4 6.2699L14.73 16.9999H4V6.2699ZM1.92 1.6499L0.65 2.9199L2.47 4.7399C2.18 5.0799 2 5.4999 2 5.9999V16.9999H0V19.9999H17.73L20.08 22.3499L21.35 21.0799L3.89 3.6199L1.92 1.6499ZM22 5.9999V3.9999H6.82L8.82 5.9999H22Z" />
    </Svg>
  );
};
