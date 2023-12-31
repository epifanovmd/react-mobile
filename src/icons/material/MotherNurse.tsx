import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MotherNurseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 2C12.7958 2 13.5588 2.31607 14.1214 2.87868C14.684 3.44129 15.0001 4.20435 15.0001 5C15.0001 5.79565 14.684 6.55871 14.1214 7.12132C13.5588 7.68393 12.7958 8 12.0001 8C11.2045 8 10.4414 7.68393 9.87879 7.12132C9.31618 6.55871 9.00011 5.79565 9.00011 5C9.00011 4.20435 9.31618 3.44129 9.87879 2.87868C10.4414 2.31607 11.2045 2 12.0001 2ZM20.0001 18L18.0001 12.56C17.6501 11.57 17.3401 10.71 16.0001 10C14.6201 9.3 13.6201 9 12.0001 9C10.3701 9 9.38011 9.3 8.00011 10C6.66011 10.71 6.35011 11.57 6.00011 12.56L4.00011 18C3.68011 19.35 6.36011 20.44 8.11011 21.19V19C8.11011 18.05 8.97011 17.38 10.6901 16.97C10.8501 16.93 11.0001 16.91 11.1201 16.89C10.5801 16.07 10.3601 15.34 10.3401 15.28L12.1101 14.68C12.1201 14.7 12.6301 16.27 13.8401 17.06C14.0501 17.13 14.2601 17.21 14.4601 17.3C15.2301 17.64 15.6901 18.08 15.8401 18.61C14.5001 19.14 13.2201 19.41 12.0001 19.41L11.0001 19.31V21.94L12.0001 22C13.3701 22 14.6701 21.72 15.8901 21.19C17.6401 20.44 20.2501 19.13 20.0001 18ZM15.5001 17C15.1023 17 14.7208 16.842 14.4394 16.5607C14.1581 16.2794 14.0001 15.8978 14.0001 15.5C14.0001 15.1022 14.1581 14.7206 14.4394 14.4393C14.7208 14.158 15.1023 14 15.5001 14C15.8979 14 16.2795 14.158 16.5608 14.4393C16.8421 14.7206 17.0001 15.1022 17.0001 15.5C17.0001 15.8978 16.8421 16.2794 16.5608 16.5607C16.2795 16.842 15.8979 17 15.5001 17Z" />
    </Svg>
  );
};
