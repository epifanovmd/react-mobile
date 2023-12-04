import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TelevisionShimmerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 17H3V5H21V17ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.11 1.9 19 3 19H8V21H16V19H21C22.11 19 23 18.11 23 17V5C23 3.9 22.11 3 21 3ZM15 6.5L14.38 7.87L13 8.5L14.38 9.13L15 10.5L15.63 9.13L17 8.5L15.63 7.87L15 6.5ZM10.5 8.5L9.41 10.91L7 12L9.41 13.09L10.5 15.5L11.6 13.09L14 12L11.6 10.91L10.5 8.5Z" />
    </Svg>
  );
};
