import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SymbolIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 7V14H4V7H2ZM6 7V9H10V11H8V14H10V13C11.11 13 12 12.11 12 11V9C12 7.89 11.11 7 10 7H6ZM15.8 7L15.6 9H14V11H15.4L15.2 13H14V15H15L14.8 17H16.8L17 15H18.4L18.2 17H20.2L20.4 15H22V13H20.6L20.8 11H22V9H21L21.2 7H19.2L19 9H17.6L17.8 7H15.8ZM17.4 11H18.8L18.6 13H17.2L17.4 11ZM2 15V17H4V15H2ZM8 15V17H10V15H8Z" />
    </Svg>
  );
};
