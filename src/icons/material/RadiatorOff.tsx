import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RadiatorOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.28 2L2 3.27L4.77 6.04L5.64 7.39L4.22 9.6L5.95 10.5L7.23 8.5L10.73 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V22H4V20H18.73L20 21.27V22H22V20.73V20.72L3.28 2ZM7 17C7 17.2652 6.89464 17.5196 6.70711 17.7071C6.51957 17.8946 6.26522 18 6 18C5.73478 18 5.48043 17.8946 5.29289 17.7071C5.10536 17.5196 5 17.2652 5 17V15C5 14.7348 5.10536 14.4804 5.29289 14.2929C5.48043 14.1054 5.73478 14 6 14C6.26522 14 6.51957 14.1054 6.70711 14.2929C6.89464 14.4804 7 14.7348 7 15V17ZM11 17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17V15C9 14.7348 9.10536 14.4804 9.29289 14.2929C9.48043 14.1054 9.73478 14 10 14C10.2652 14 10.5196 14.1054 10.7071 14.2929C10.8946 14.4804 11 14.7348 11 15V17ZM15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V15C13 14.79 13.08 14.61 13.18 14.45L15 16.27V17ZM16.25 9.5L17.67 7.3L16.25 5.1L18.25 2L20 2.89L18.56 5.1L20 7.3V7.31L18 10.4L16.25 9.5ZM22 14V18.18L19 15.18V15C19 14.7348 18.8946 14.4804 18.7071 14.2929C18.5196 14.1054 18.2652 14 18 14C17.95 14 17.9 14 17.85 14.03L15.82 12H20C21.11 12 22 12.9 22 14ZM11.64 7.3L10.22 5.1L12.22 2L13.95 2.89L12.53 5.1L13.95 7.3L13.94 7.31L12.84 9L11.44 7.62L11.64 7.3ZM7.5 3.69L6.1 2.28L6.22 2.09L7.95 3L7.5 3.69Z" />
    </Svg>
  );
};
