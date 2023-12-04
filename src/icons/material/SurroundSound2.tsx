import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SurroundSound2Icon: FC<FlexSvgProps> = ({
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
      <Path d="M3 7V9H7V11H5C3.9 11 3 11.9 3 13V17H9V15H5V13H7C8.1 13 9 12.1 9 11V9C9 7.9 8.1 7 7 7H3ZM13 17H11V15H13V17ZM17 7C15.9 7 15 7.9 15 9V15C15 16.1 15.9 17 17 17H19C20.1 17 21 16.1 21 15V9C21 7.9 20.1 7 19 7H17ZM17 9H19V15H17V9Z" />
    </Svg>
  );
};
