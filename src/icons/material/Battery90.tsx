import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Battery90Icon: FC<FlexSvgProps> = ({
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
      <Path d="M16 8H8V6H16V8ZM16.67 4H15V2H9V4H7.33C6.97726 4 6.63897 4.14012 6.38955 4.38955C6.14012 4.63897 6 4.97726 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.0227 22 17.361 21.8599 17.6105 21.6105C17.8599 21.361 18 21.0227 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z" />
    </Svg>
  );
};
