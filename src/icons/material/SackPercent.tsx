import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SackPercentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 7L6 2L10 4L12 2L14 4L18 2L16 7H8ZM16 22C10 22 8 22 8 22C2 22 3 18 3 18C3 18 4 11 8 9H16C20 11 21 18 21 18C21 18 22 22 16 22ZM7.5 12.5C7.5 12.8978 7.65804 13.2794 7.93934 13.5607C8.22064 13.842 8.60218 14 9 14C9.39782 14 9.77936 13.842 10.0607 13.5607C10.342 13.2794 10.5 12.8978 10.5 12.5C10.5 12.1022 10.342 11.7206 10.0607 11.4393C9.77936 11.158 9.39782 11 9 11C8.60218 11 8.22064 11.158 7.93934 11.4393C7.65804 11.7206 7.5 12.1022 7.5 12.5ZM16.5 18.5C16.5 18.1022 16.342 17.7206 16.0607 17.4393C15.7794 17.158 15.3978 17 15 17C14.6022 17 14.2206 17.158 13.9393 17.4393C13.658 17.7206 13.5 18.1022 13.5 18.5C13.5 18.8978 13.658 19.2794 13.9393 19.5607C14.2206 19.842 14.6022 20 15 20C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5ZM16.5 12.35L15.15 11L7.5 18.65L8.87 20L16.5 12.35Z" />
    </Svg>
  );
};
