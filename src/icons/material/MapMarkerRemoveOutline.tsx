import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerRemoveOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.6 14.2L15.2 15.6L17.6 18L15.2 20.4L16.6 21.8L19 19.4L21.4 21.8L22.8 20.4L20.4 18L22.8 15.6L21.4 14.2L19 16.6L16.6 14.2ZM9 6.5C10.4 6.5 11.5 7.6 11.5 9C11.5 10.4 10.4 11.5 9 11.5C7.6 11.5 6.5 10.4 6.5 9C6.5 7.6 7.6 6.5 9 6.5ZM9 2C12.9 2 16 5.1 16 9C16 14.2 9 22 9 22C9 22 2 14.2 2 9C2 5.1 5.1 2 9 2ZM9 4C6.2 4 4 6.2 4 9C4 10 4 12 9 18.7C14 12 14 10 14 9C14 6.2 11.8 4 9 4Z" />
    </Svg>
  );
};
