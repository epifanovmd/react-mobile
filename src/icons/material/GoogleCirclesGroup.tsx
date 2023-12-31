import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleCirclesGroupIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 10C4.46957 10 3.96086 10.2107 3.58579 10.5858C3.21071 10.9609 3 11.4696 3 12C3 13.11 3.9 14 5 14C6.11 14 7 13.11 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10ZM5 16C3.93913 16 2.92172 15.5786 2.17157 14.8284C1.42143 14.0783 1 13.0609 1 12C1 10.9391 1.42143 9.92172 2.17157 9.17157C2.92172 8.42143 3.93913 8 5 8C6.06087 8 7.07828 8.42143 7.82843 9.17157C8.57857 9.92172 9 10.9391 9 12C9 13.0609 8.57857 14.0783 7.82843 14.8284C7.07828 15.5786 6.06087 16 5 16ZM10.5 11H14V8L18 12L14 16V13H10.5V11ZM5 6C4.55 6 4.11 6.05 3.69 6.14C5.63 3.05 9.08 1 13 1C19.08 1 24 5.92 24 12C24 18.08 19.08 23 13 23C9.08 23 5.63 20.95 3.69 17.86C4.11 17.95 4.55 18 5 18C5.8 18 6.56 17.84 7.25 17.56C8.71 19.07 10.74 20 13 20C15.1217 20 17.1566 19.1571 18.6569 17.6569C20.1571 16.1566 21 14.1217 21 12C21 9.87827 20.1571 7.84344 18.6569 6.34315C17.1566 4.84285 15.1217 4 13 4C10.74 4 8.71 4.93 7.25 6.44C6.56 6.16 5.8 6 5 6Z" />
    </Svg>
  );
};
