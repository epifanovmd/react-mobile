import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PencilLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.5 2C4.83696 2 4.20107 2.26339 3.73223 2.73223C3.26339 3.20107 3 3.83696 3 4.5V5C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H8C8.26522 11 8.51957 10.8946 8.70711 10.7071C8.89464 10.5196 9 10.2652 9 10V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5V4.5C8 3.83696 7.73661 3.20107 7.26777 2.73223C6.79893 2.26339 6.16304 2 5.5 2ZM5.5 3C5.89782 3 6.27936 3.15804 6.56066 3.43934C6.84196 3.72064 7 4.10218 7 4.5V5H4V4.5C4 4.10218 4.15804 3.72064 4.43934 3.43934C4.72064 3.15804 5.10218 3 5.5 3ZM19.66 3C19.4 3 19.16 3.09 18.97 3.28L17.13 5.13L20.88 8.88L22.72 7.03C23.11 6.64 23.11 6 22.72 5.63L20.38 3.28C20.18 3.09 19.91 3 19.66 3ZM16.06 6.19L5 17.25V21H8.75L19.81 9.94L16.06 6.19Z" />
    </Svg>
  );
};
