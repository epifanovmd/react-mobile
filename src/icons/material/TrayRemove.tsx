import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrayRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 17.0009C2 17.5314 2.21071 18.0401 2.58579 18.4152C2.96086 18.7902 3.46957 19.0009 4 19.0009H20C20.5304 19.0009 21.0391 18.7902 21.4142 18.4152C21.7893 18.0401 22 17.5314 22 17.0009V12.0009H20V17.0009H4V12.0009H2V17.0009ZM14.12 5.46094L15.54 6.88094L13.41 9.00094L15.54 11.1209L14.12 12.5409L12 10.4109L9.88 12.5409L8.46 11.1209L10.59 9.00094L8.46 6.88094L9.88 5.46094L12 7.59094L14.12 5.46094Z" />
    </Svg>
  );
};
