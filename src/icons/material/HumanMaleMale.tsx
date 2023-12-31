import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanMaleMaleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 2C8.03043 2 8.53914 2.21071 8.91421 2.58579C9.28929 2.96086 9.5 3.46957 9.5 4C9.5 4.53043 9.28929 5.03914 8.91421 5.41421C8.53914 5.78929 8.03043 6 7.5 6C6.96957 6 6.46086 5.78929 6.08579 5.41421C5.71071 5.03914 5.5 4.53043 5.5 4C5.5 3.46957 5.71071 2.96086 6.08579 2.58579C6.46086 2.21071 6.96957 2 7.5 2ZM6 7H9C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9V14.5H9.5V22H5.5V14.5H4V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7ZM16.5 2C17.0304 2 17.5391 2.21071 17.9142 2.58579C18.2893 2.96086 18.5 3.46957 18.5 4C18.5 4.53043 18.2893 5.03914 17.9142 5.41421C17.5391 5.78929 17.0304 6 16.5 6C15.9696 6 15.4609 5.78929 15.0858 5.41421C14.7107 5.03914 14.5 4.53043 14.5 4C14.5 3.46957 14.7107 2.96086 15.0858 2.58579C15.4609 2.21071 15.9696 2 16.5 2ZM15 7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V14.5H18.5V22H14.5V14.5H13V9C13 8.46957 13.2107 7.96086 13.5858 7.58579C13.9609 7.21071 14.4696 7 15 7Z" />
    </Svg>
  );
};
