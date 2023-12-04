import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PaletteAdvancedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 22H10V20H22V22ZM2 22V20H9V22H2ZM18 18V10H22V18H18ZM18 3H22V9H18V3ZM2 18V3H16V18H2ZM9 14.56C9.79565 14.56 10.5587 14.2439 11.1213 13.6813C11.6839 13.1187 12 12.3556 12 11.56C12 9.56 9 6.19 9 6.19C9 6.19 6 9.56 6 11.56C6 12.3556 6.31607 13.1187 6.87868 13.6813C7.44129 14.2439 8.20435 14.56 9 14.56Z" />
    </Svg>
  );
};
