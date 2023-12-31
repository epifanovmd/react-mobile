import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HookIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 6C18 7.82 16.76 9.41 15 9.86V17C15 18.3261 14.4732 19.5979 13.5355 20.5355C12.5979 21.4732 11.3261 22 10 22C8.67392 22 7.40215 21.4732 6.46447 20.5355C5.52678 19.5979 5 18.3261 5 17V12L10 17H7C7 17.7956 7.31607 18.5587 7.87868 19.1213C8.44129 19.6839 9.20435 20 10 20C10.7956 20 11.5587 19.6839 12.1213 19.1213C12.6839 18.5587 13 17.7956 13 17V9.86C11.23 9.4 10 7.8 10 5.97C10 3.76 11.8 2 14 2C16.22 2 18 3.79 18 6ZM14 8C14.5304 8 15.0391 7.78929 15.4142 7.41421C15.7893 7.03914 16 6.53043 16 6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4C13.4696 4 12.9609 4.21071 12.5858 4.58579C12.2107 4.96086 12 5.46957 12 6C12 6.53043 12.2107 7.03914 12.5858 7.41421C12.9609 7.78929 13.4696 8 14 8Z" />
    </Svg>
  );
};
