import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldBugIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 13H13V14H11V13ZM21 5V11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1L21 5ZM17 10H14.8C14.6 9.4 14.2 8.9 13.7 8.5L14.9 7.3L14.2 6.6L12.8 8H12C11.8 8 11.5 8 11.3 8.1L9.9 6.6L9.1 7.4L10.3 8.6C9.8 8.9 9.4 9.4 9.2 10H7V11H9V12H7V13H9V14H7V15H9.2C9.6 16.2 10.7 17 12 17C13.3 17 14.4 16.2 14.8 15H17V14H15V13H17V12H15V11H17V10ZM11 12H13V11H11V12Z" />
    </Svg>
  );
};
