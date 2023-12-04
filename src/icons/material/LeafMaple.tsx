import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LeafMapleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.7901 13L16.0001 16L17.0001 18L13.0001 17.25V21H11.0001V17.25L7.00011 18L8.00011 16L2.21011 13L3.21011 11.27L1.61011 8L5.21011 7.77L6.21011 6L9.63011 9.9L8.00011 5H10.0001L12.0001 2L14.0001 5H16.0001L14.3701 9.9L17.7901 6L18.7901 7.73L22.3901 7.96L20.7901 11.19L21.7901 13Z" />
    </Svg>
  );
};
