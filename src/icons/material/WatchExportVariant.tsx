import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WatchExportVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 11H19L16.5 8.5L17.92 7.08L22.84 12L17.92 16.92L16.5 15.5L19 13H14V11ZM8 0H16L16.83 5H17C17.28 5 17.54 5.06 17.78 5.16L15.94 7H7V17H15.94L17.78 18.84C17.54 18.94 17.28 19 17 19H16.83L16 24H8L7.17 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7C5 5.89 5.9 5 7 5H7.17L8 0Z" />
    </Svg>
  );
};
