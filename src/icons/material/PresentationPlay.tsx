import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PresentationPlayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 3H10C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3H22V5H21V16H15.25L17 22H15L13.25 16H10.75L9 22H7L8.75 16H3V5H2V3ZM5 5V14H19V5H5ZM11.85 11.85C11.76 11.94 11.64 12 11.5 12C11.3674 12 11.2402 11.9473 11.1464 11.8536C11.0527 11.7598 11 11.6326 11 11.5V7.5C11 7.36739 11.0527 7.24021 11.1464 7.14645C11.2402 7.05268 11.3674 7 11.5 7C11.64 7 11.76 7.06 11.85 7.15L13.25 8.54C13.57 8.86 13.89 9.18 13.89 9.5C13.89 9.82 13.57 10.14 13.25 10.46L11.85 11.85Z" />
    </Svg>
  );
};
