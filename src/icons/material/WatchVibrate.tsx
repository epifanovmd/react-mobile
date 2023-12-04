import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WatchVibrateIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 17V7H5V17H3ZM19 17V7H21V17H19ZM22 9H24V15H22V9ZM0 15V9H2V15H0ZM17.96 11.97C17.96 13.87 17.07 15.57 15.68 16.67L14.97 20.95H9L8.27 16.67C6.88 15.57 6 13.87 6 11.97C6 10.07 6.88 8.37 8.27 7.28L9 3H14.97L15.68 7.28C17.07 8.37 17.96 10.07 17.96 11.97ZM7.5 11.97C7.5 14.45 9.5 16.46 11.97 16.46C13.16 16.4574 14.3005 15.9835 15.142 15.142C15.9835 14.3005 16.4574 13.16 16.46 11.97C16.46 9.5 14.45 7.5 11.97 7.5C10.7845 7.5 9.64752 7.97095 8.80923 8.80923C7.97095 9.64752 7.5 10.7845 7.5 11.97Z" />
    </Svg>
  );
};
