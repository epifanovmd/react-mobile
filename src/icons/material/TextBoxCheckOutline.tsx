import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TextBoxCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25L17 21ZM12.8 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V12.8C20.39 12.45 19.72 12.2 19 12.08V5H5V19H12.08C12.2 19.72 12.45 20.39 12.8 21ZM12 17H7V15H12V17ZM14.68 13H7V11H17V12.08C16.15 12.22 15.37 12.54 14.68 13ZM17 9H7V7H17" />
    </Svg>
  );
};
