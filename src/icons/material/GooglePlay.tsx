import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GooglePlayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 20.5004V3.50039C3 2.91039 3.34 2.39039 3.84 2.15039L13.69 12.0004L3.84 21.8504C3.34 21.6004 3 21.0904 3 20.5004ZM16.81 15.1204L6.05 21.3404L14.54 12.8504L16.81 15.1204ZM20.16 10.8104C20.5 11.0804 20.75 11.5004 20.75 12.0004C20.75 12.5004 20.53 12.9004 20.18 13.1804L17.89 14.5004L15.39 12.0004L17.89 9.50039L20.16 10.8104ZM6.05 2.66039L16.81 8.88039L14.54 11.1504L6.05 2.66039Z" />
    </Svg>
  );
};
