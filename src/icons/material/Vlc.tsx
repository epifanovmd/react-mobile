import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VlcIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 1C11.58 1 11.19 1.23 11 1.75L9.88002 4.88C10.36 5.4 11.28 5.5 12 5.5C12.72 5.5 13.64 5.4 14.13 4.88L13 1.75C12.82 1.25 12.42 1 12 1ZM8.44002 8.91L7.00002 12.91C8.07002 14.27 10.26 14.5 12 14.5C13.74 14.5 15.93 14.27 17 12.91L15.56 8.91C14.76 9.83 13.24 10 12 10C10.76 10 9.24002 9.83 8.44002 8.91ZM5.44002 15C4.62002 15 3.76002 15.65 3.53002 16.44L2.06002 21.56C1.84002 22.35 2.30002 23 3.13002 23H20.88C21.7 23 22.16 22.35 21.94 21.56L20.47 16.44C20.24 15.65 19.38 15 18.56 15H17.75L18.09 15.97C18.21 16.29 18.29 16.69 18.09 16.97C16.84 18.7 14.14 19 12 19C9.86002 19 7.16002 18.7 5.91002 16.97C5.71002 16.69 5.79002 16.29 5.91002 15.97L6.25002 15H5.44002Z" />
    </Svg>
  );
};
