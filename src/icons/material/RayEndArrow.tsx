import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RayEndArrowIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 12L5 16V13H17.17C17.58 14.17 18.69 15 20 15C20.7956 15 21.5587 14.6839 22.1213 14.1213C22.6839 13.5587 23 12.7956 23 12C23 11.2044 22.6839 10.4413 22.1213 9.87868C21.5587 9.31607 20.7956 9 20 9C18.69 9 17.58 9.83 17.17 11H5V8L1 12Z" />
    </Svg>
  );
};
