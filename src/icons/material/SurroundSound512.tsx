import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SurroundSound512Icon: FC<FlexSvgProps> = ({
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
      <Path d="M18 7V9H22V11H20C18.9 11 18 11.9 18 13V17H24V15H20V13H22C23.1 13 24 12.1 24 11V9C24 7.9 23.1 7 22 7H18ZM9 17H7V15H9V17ZM9 7V9H11V17H13V7H9ZM0 7V13H4V15H0V17H4C5.1 17 6 16.1 6 15V13C6 11.9 5.1 11 4 11H2V9H6V7H0ZM17 17H15V15H17V17Z" />
    </Svg>
  );
};
