import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanFemaleFemaleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 2C8.03043 2 8.53914 2.21071 8.91421 2.58579C9.28929 2.96086 9.5 3.46957 9.5 4C9.5 4.53043 9.28929 5.03914 8.91421 5.41421C8.53914 5.78929 8.03043 6 7.5 6C6.96957 6 6.46086 5.78929 6.08579 5.41421C5.71071 5.03914 5.5 4.53043 5.5 4C5.5 3.46957 5.71071 2.96086 6.08579 2.58579C6.46086 2.21071 6.96957 2 7.5 2ZM6 22V16H3L5.6 8.4C5.9 7.6 6.6 7 7.5 7C8.4 7 9.2 7.6 9.4 8.4L12 16L14.6 8.4C14.9 7.6 15.6 7 16.5 7C17.4 7 18.2 7.6 18.4 8.4L21 16H18V22H15V16H12H9V22H6ZM16.5 2C17.0304 2 17.5391 2.21071 17.9142 2.58579C18.2893 2.96086 18.5 3.46957 18.5 4C18.5 4.53043 18.2893 5.03914 17.9142 5.41421C17.5391 5.78929 17.0304 6 16.5 6C15.9696 6 15.4609 5.78929 15.0858 5.41421C14.7107 5.03914 14.5 4.53043 14.5 4C14.5 3.46957 14.7107 2.96086 15.0858 2.58579C15.4609 2.21071 15.9696 2 16.5 2Z" />
    </Svg>
  );
};
