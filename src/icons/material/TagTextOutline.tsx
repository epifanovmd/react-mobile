import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagTextOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.4 11.6L12.4 2.6C12 2.2 11.5 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.5 2.2 12 2.6 12.4L11.6 21.4C12 21.8 12.5 22 13 22C13.5 22 14 21.8 14.4 21.4L21.4 14.4C21.8 14 22 13.5 22 13C22 12.5 21.8 12 21.4 11.6ZM13 20L4 11V4H11L20 13L13 20ZM6.5 5C7.3 5 8 5.7 8 6.5C8 7.3 7.3 8 6.5 8C5.7 8 5 7.3 5 6.5C5 5.7 5.7 5 6.5 5ZM10.1 8.9L11.5 7.5L17 13L15.6 14.4L10.1 8.9ZM7.6 11.4L9 10L13 14L11.6 15.4L7.6 11.4Z" />
    </Svg>
  );
};
