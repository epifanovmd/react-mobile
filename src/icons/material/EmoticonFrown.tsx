import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonFrownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C6.47 2 2 6.5 2 12C2 17.5 6.47 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8ZM8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8ZM6.89 17C7.69 14.96 9.67 13.5 12 13.5C14.33 13.5 16.31 14.96 17.11 17H6.89Z" />
    </Svg>
  );
};
