import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WatchImportIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 11H7L4.5 8.5L5.92 7.08L10.84 12L5.92 16.92L4.5 15.5L7 13H2V11ZM12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.6 6 9.31 6.5 8.29 7.29L6.87 5.87L7.05 5.73L8 0H16L16.95 5.73C18.81 7.19 20 9.45 20 12C20 14.54 18.81 16.81 16.95 18.27L16 24H8L7.05 18.27L6.87 18.13L8.29 16.71C9.31 17.5 10.6 18 12 18Z" />
    </Svg>
  );
};
