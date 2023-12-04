import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WatchImportVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 11H6L3.5 8.5L4.92 7.08L9.84 12L4.92 16.92L3.5 15.5L6 13H1V11ZM8 0H16L16.83 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V17C19 18.11 18.1 19 17 19H16.83L16 24H8L7.17 19H7C6.46 19 6 18.79 5.62 18.44L7.06 17H17V7H7.06L5.62 5.56C6 5.21 6.46 5 7 5H7.17L8 0Z" />
    </Svg>
  );
};
