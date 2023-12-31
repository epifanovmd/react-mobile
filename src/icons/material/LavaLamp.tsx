import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LavaLampIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 3L8 16H16L14 3H10ZM11.5 5.75C11.6989 5.75 11.8897 5.82902 12.0303 5.96967C12.171 6.11032 12.25 6.30109 12.25 6.5C12.25 6.69891 12.171 6.88968 12.0303 7.03033C11.8897 7.17098 11.6989 7.25 11.5 7.25C11.3011 7.25 11.1103 7.17098 10.9697 7.03033C10.829 6.88968 10.75 6.69891 10.75 6.5C10.75 6.30109 10.829 6.11032 10.9697 5.96967C11.1103 5.82902 11.3011 5.75 11.5 5.75ZM12.5 8.5C12.7652 8.5 13.0196 8.60536 13.2071 8.79289C13.3946 8.98043 13.5 9.23478 13.5 9.5C13.5 9.76522 13.3946 10.0196 13.2071 10.2071C13.0196 10.3946 12.7652 10.5 12.5 10.5C12.2348 10.5 11.9804 10.3946 11.7929 10.2071C11.6054 10.0196 11.5 9.76522 11.5 9.5C11.5 9.23478 11.6054 8.98043 11.7929 8.79289C11.9804 8.60536 12.2348 8.5 12.5 8.5ZM11.5 12C11.8978 12 12.2794 12.158 12.5607 12.4393C12.842 12.7206 13 13.1022 13 13.5C13 13.8978 12.842 14.2794 12.5607 14.5607C12.2794 14.842 11.8978 15 11.5 15C11.1022 15 10.7206 14.842 10.4393 14.5607C10.158 14.2794 10 13.8978 10 13.5C10 13.1022 10.158 12.7206 10.4393 12.4393C10.7206 12.158 11.1022 12 11.5 12ZM8 17L10 19L8 21H16L14 19L16 17H8Z" />
    </Svg>
  );
};
