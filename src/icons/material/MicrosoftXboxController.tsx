import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftXboxControllerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.7499 15.7494C6.7499 15.7494 5.9999 17.9994 3.9999 18.9994C1.9999 18.9994 0.4999 15.9994 4.4999 7.49937H4.7499L5.1899 6.66937C5.1899 6.66937 7.9999 4.99937 9.3299 6.22937H14.6699C15.9999 4.99937 18.8099 6.66937 18.8099 6.66937L19.2499 7.49937H19.4999C23.4999 15.9994 21.9999 18.9994 19.9999 18.9994C17.9999 17.9994 17.2499 15.7494 15.2499 15.7494H8.7499ZM11.9999 6.99937C11.7347 6.99937 11.4803 7.10473 11.2928 7.29226C11.1053 7.4798 10.9999 7.73415 10.9999 7.99937C10.9999 8.26459 11.1053 8.51894 11.2928 8.70648C11.4803 8.89401 11.7347 8.99937 11.9999 8.99937C12.2651 8.99937 12.5195 8.89401 12.707 8.70648C12.8945 8.51894 12.9999 8.26459 12.9999 7.99937C12.9999 7.73415 12.8945 7.4798 12.707 7.29226C12.5195 7.10473 12.2651 6.99937 11.9999 6.99937Z" />
    </Svg>
  );
};
