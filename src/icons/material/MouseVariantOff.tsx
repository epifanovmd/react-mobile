import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseVariantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 5.26961L3.28 3.99961L20 20.7196L18.73 21.9996L17.29 20.5596C16.42 21.9996 14.82 22.9996 13 22.9996C11.6739 22.9996 10.4021 22.4728 9.46447 21.5351C8.52678 20.5975 8 19.3257 8 17.9996V16.8996C5.72 16.4396 4 14.4196 4 11.9996V8.99961H5.73L2 5.26961ZM14 6.99961H10V2.09961C12.28 2.55961 14 4.57961 14 6.99961ZM8 2.09961V6.17961L5.38 3.54961C6.07 2.82961 7 2.30961 8 2.09961ZM14 11.9996V12.1696L10.82 8.99961H14V11.9996ZM10 16.8996V17.9996C10 18.7953 10.3161 19.5583 10.8787 20.1209C11.4413 20.6835 12.2044 20.9996 13 20.9996C14.28 20.9996 15.37 20.1996 15.8 19.0696L12.4 15.6696C11.74 16.2796 10.92 16.7096 10 16.8996ZM16 12.9996C16 11.9387 16.4214 10.9213 17.1716 10.1712C17.9217 9.42104 18.9391 8.99961 20 8.99961H22L21 9.99961L22 10.9996H20C19.4696 10.9996 18.9609 11.2103 18.5858 11.5854C18.2107 11.9605 18 12.4692 18 12.9996V16.1796L16 14.1796V12.9996Z" />
    </Svg>
  );
};
