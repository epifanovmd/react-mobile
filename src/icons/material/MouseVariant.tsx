import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 6.99961H10V2.09961C12.28 2.55961 14 4.57961 14 6.99961ZM4 6.99961C4 4.57961 5.72 2.55961 8 2.09961V6.99961H4ZM14 11.9996C14 14.4196 12.28 16.4396 10 16.8996V17.9996C10 18.7953 10.3161 19.5583 10.8787 20.1209C11.4413 20.6835 12.2044 20.9996 13 20.9996C13.7956 20.9996 14.5587 20.6835 15.1213 20.1209C15.6839 19.5583 16 18.7953 16 17.9996V12.9996C16 11.9387 16.4214 10.9213 17.1716 10.1712C17.9217 9.42104 18.9391 8.99961 20 8.99961H22L21 9.99961L22 10.9996H20C19.4696 10.9996 18.9609 11.2103 18.5858 11.5854C18.2107 11.9605 18 12.4692 18 12.9996V17.9996C18 18.6562 17.8707 19.3064 17.6194 19.913C17.3681 20.5197 16.9998 21.0709 16.5355 21.5351C16.0712 21.9994 15.52 22.3677 14.9134 22.619C14.3068 22.8703 13.6566 22.9996 13 22.9996C11.6739 22.9996 10.4021 22.4728 9.46447 21.5351C8.52678 20.5975 8 19.3257 8 17.9996V16.8996C5.72 16.4396 4 14.4196 4 11.9996V8.99961H14V11.9996Z" />
    </Svg>
  );
};
