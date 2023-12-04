import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreCheckOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 13C19.7 13 20.37 13.13 21 13.35V12L20 7H4L3 12V14H4V20H13.09C13.04 19.67 13 19.34 13 19C13 17.77 13.37 16.64 14 15.69V14H15.69C16.64 13.37 17.77 13 19 13ZM12 18H6V14H12V18ZM5.04 12L5.64 9H18.36L18.96 12H5.04ZM20 6H4V4H20V6ZM22.5 17.25L17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25Z" />
    </Svg>
  );
};
