import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KiteOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.5001 5.1L17.9501 10.38L12.5001 17.88L7.0701 10.38L12.5001 5.1ZM12.5001 3C12.0501 3 11.6601 3.15 11.3301 3.46L5.5401 9.08C5.2301 9.38 5.0601 9.75 5.0001 10.2C5.0001 10.64 5.0801 11.04 5.3301 11.4L11.4501 19.83C11.2001 20.36 10.7501 20.62 10.0901 20.62C9.2901 20.62 8.7901 20.25 8.6001 19.5C8.4001 18.84 8.0001 18.27 7.3801 17.8C6.7601 17.34 6.1001 17.1 5.4101 17.1C4.3601 17.1 3.5001 17.5 2.8501 18.3L4.2101 19.42C4.5001 19.03 4.9201 18.84 5.4101 18.84C6.2101 18.84 6.7101 19.21 6.9001 19.95C7.0901 20.62 7.5001 21.19 8.1201 21.67C8.7401 22.15 9.4001 22.4 10.0901 22.4C11.3301 22.4 12.2801 21.83 12.9401 20.7L19.6801 11.4C19.9301 11.04 20.0301 10.64 20.0001 10.2C19.9501 9.76 19.7701 9.38 19.4701 9.08L13.6801 3.46C13.3501 3.15 12.9601 3 12.5001 3Z" />
    </Svg>
  );
};
