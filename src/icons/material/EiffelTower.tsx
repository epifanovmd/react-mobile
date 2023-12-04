import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EiffelTowerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.21 17C8.65 16.15 9.06 15.16 9.44 14H9V12H10C10.61 9.4 11 6.13 11 2H13C13 6.13 13.4 9.4 14 12H15V14H14.56C14.94 15.16 15.35 16.15 15.79 17H17V19L19 22H16.58C15.81 20.24 14.05 19 12 19C9.95 19 8.19 20.24 7.42 22H5L7 19L6.97 17H8.21ZM12.59 14H11.41C11.07 15.13 10.69 16.13 10.28 17H13.72C13.32 16.13 12.93 15.13 12.59 14Z" />
    </Svg>
  );
};
