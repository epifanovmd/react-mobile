import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectCompareIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 23H11V1H13V23ZM9 19H5V5H9V3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H9V19ZM19 7V9H21V7H19ZM19 5H21C21 3.89 20.1 3 19 3V5ZM21 15H19V17H21V15ZM19 11V13H21V11H19ZM17 3H15V5H17V3ZM19 21C20.11 21 21 20.11 21 19H19V21ZM17 19H15V21H17V19Z" />
    </Svg>
  );
};
