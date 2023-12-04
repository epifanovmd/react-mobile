import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BorderInsideIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 17H21V15H19V17ZM19 21H21V19H19V21ZM13 3H11V11H3V13H11V21H13V13H21V11H13V3ZM15 21H17V19H15V21ZM19 5H21V3H19V5ZM19 9H21V7H19V9ZM17 3H15V5H17V3ZM5 3H3V5H5V3ZM9 3H7V5H9V3ZM3 17H5V15H3V17ZM5 7H3V9H5V7ZM7 21H9V19H7V21ZM3 21H5V19H3V21Z" />
    </Svg>
  );
};
