import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IronBoardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 6H16V4.8C16 3.68 16.56 2.63 17.5 2C18.44 2.63 19 3.68 19 4.8V6ZM15.28 13.63L19.59 19C20.38 19.06 21 19.7 21 20.5C21 21.33 20.33 22 19.5 22C18.67 22 18 21.33 18 20.5C18 20.42 18 20.34 18 20.26L14 15.23L10 20.26C10 20.34 10 20.42 10 20.5C10 21.33 9.33 22 8.5 22C7.67 22 7 21.33 7 20.5C7 19.7 7.63 19.06 8.41 19L12.72 13.63L9 9H3V7H21V9H19L15.28 13.63ZM14 12L16.42 9H11.58L14 12Z" />
    </Svg>
  );
};
