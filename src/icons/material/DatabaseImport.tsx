import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseImportIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3C8.59 3 5.69 4.07 4.54 5.57L9.79 10.82C10.5 10.93 11.22 11 12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3ZM3.92 7.08L2.5 8.5L5 11H0V13H5L2.5 15.5L3.92 16.92L8.84 12L3.92 7.08ZM20 9C20 11.21 16.42 13 12 13C11.34 13 10.7 12.95 10.09 12.87L7.62 15.34C8.88 15.75 10.38 16 12 16C16.42 16 20 14.21 20 12V9ZM20 14C20 16.21 16.42 18 12 18C9.72 18 7.67 17.5 6.21 16.75L4.53 18.43C5.68 19.93 8.59 21 12 21C16.42 21 20 19.21 20 17" />
    </Svg>
  );
};
