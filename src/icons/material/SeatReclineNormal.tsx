import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeatReclineNormalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.59 5.40914C6.81 4.62914 6.81 3.35914 7.59 2.57914C8.37 1.79914 9.64 1.79914 10.42 2.57914C11.2 3.35914 11.2 4.62914 10.42 5.40914C9.63 6.19914 8.37 6.19914 7.59 5.40914ZM6 15.9991V6.99914H4V15.9991C4 17.3252 4.52678 18.597 5.46447 19.5347C6.40215 20.4724 7.67392 20.9991 9 20.9991H15V18.9991H9C8.20435 18.9991 7.44129 18.6831 6.87868 18.1205C6.31607 17.5579 6 16.7948 6 15.9991ZM20 20.0691L14.93 14.9991H11.5V11.3191C12.9 12.4691 15.1 13.4991 17 13.4991V11.3191C15.34 11.3391 13.39 10.4491 12.33 9.27914L10.93 7.72914C10.74 7.49914 10.5 7.34914 10.24 7.22914C9.95 7.08914 9.62 6.99914 9.28 6.99914H9.25C8 6.99914 7 7.99914 7 9.24914V14.9991C7 15.7948 7.31607 16.5579 7.87868 17.1205C8.44129 17.6831 9.20435 17.9991 10 17.9991H15.07L18.57 21.4991" />
    </Svg>
  );
};
