import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HelpIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 19H13V22H10V19ZM12 2C17.35 2.22 19.68 7.62 16.5 11.67C15.67 12.67 14.33 13.33 13.67 14.17C13 15 13 16 13 17H10C10 15.33 10 13.92 10.67 12.92C11.33 11.92 12.67 11.33 13.5 10.67C15.92 8.43 15.32 5.26 12 5C11.2044 5 10.4413 5.31607 9.87868 5.87868C9.31607 6.44129 9 7.20435 9 8H6C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2Z" />
    </Svg>
  );
};
