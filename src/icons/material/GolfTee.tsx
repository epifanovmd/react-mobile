import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GolfTeeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 18.9996V16.9996H17V18.9996H15C14.5 18.9996 14 19.1996 13.6 19.5996C13.2 19.9996 13 20.4996 13 20.9996V21.9996H11V20.9996C11 20.4996 10.8 19.9996 10.4 19.5996C10 19.1996 9.5 18.9996 9 18.9996H7ZM11 5.99961C11 5.69961 11.1 5.49961 11.3 5.29961C11.5 5.09961 11.7 4.99961 12 4.99961C12.3 4.99961 12.5 5.09961 12.7 5.29961C12.9 5.49961 13 5.69961 13 5.99961C13 6.29961 12.9 6.49961 12.7 6.69961C12.5 6.89961 12.3 6.99961 12 6.99961C11.7 6.99961 11.5 6.89961 11.3 6.69961C11.1 6.49961 11 6.29961 11 5.99961ZM13 7.99961C13 7.69961 13.1 7.49961 13.3 7.29961C13.5 7.09961 13.7 6.99961 14 6.99961C14.3 6.99961 14.5 7.09961 14.7 7.29961C14.9 7.49961 15 7.69961 15 7.99961C15 8.29961 14.9 8.49961 14.7 8.69961C14.5 8.89961 14.3 8.99961 14 8.99961C13.7 8.99961 13.5 8.89961 13.3 8.69961C13.1 8.49961 13 8.29961 13 7.99961ZM9 7.99961C9 7.69961 9.1 7.49961 9.3 7.29961C9.5 7.09961 9.7 6.99961 10 6.99961C10.3 6.99961 10.5 7.09961 10.7 7.29961C10.9 7.49961 11 7.69961 11 7.99961C11 8.29961 10.9 8.49961 10.7 8.69961C10.5 8.89961 10.3 8.99961 10 8.99961C9.7 8.99961 9.5 8.89961 9.3 8.69961C9.1 8.49961 9 8.29961 9 7.99961ZM16.9 4.09961C15.5 2.69961 13.9 2.09961 12 2.09961C10.1 2.09961 8.4 2.79961 7.1 4.09961C5.8 5.39961 5 7.09961 5 8.99961C5 10.8996 5.7 12.5996 7 13.8996C8.3 15.1996 10 15.8996 11.9 15.8996C13.8 15.8996 15.5 15.1996 16.8 13.8996C18.1 12.5996 18.8 10.8996 18.8 8.99961C18.8 7.09961 18.3 5.39961 16.9 4.09961ZM15.5 12.4996C14.5 13.4996 13.3 13.9996 12 13.9996C10.7 13.9996 9.4 13.4996 8.5 12.4996C7.6 11.4996 7 10.3996 7 8.99961C7 7.59961 7.5 6.39961 8.5 5.49961C9.5 4.59961 10.6 3.99961 12 3.99961C13.4 3.99961 14.6 4.49961 15.5 5.49961C16.4 6.49961 17 7.59961 17 8.99961C17 10.3996 16.5 11.5996 15.5 12.4996Z" />
    </Svg>
  );
};
