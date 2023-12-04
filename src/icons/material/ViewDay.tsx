import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewDayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 3V6H21V3H2ZM20 8H3C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H20C20.2652 16 20.5196 15.8946 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15V9C21 8.73478 20.8946 8.48043 20.7071 8.29289C20.5196 8.10536 20.2652 8 20 8ZM2 21H21V18H2V21Z" />
    </Svg>
  );
};
