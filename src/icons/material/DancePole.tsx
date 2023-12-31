import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DancePoleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 1V2L11.2301 1.36L7.76006 5.5L11.0001 7.5V5.16L10.7801 5L12.0001 3.56V23H14.0001V13.24L15.9301 11.31C18.5001 11.71 21.1301 10.36 22.6601 8.83L21.2401 7.41C20.1001 8.56 17.7001 9.61 16.0001 9.26L14.0001 7.24V1H12.0001ZM17.0001 4C16.4696 4 15.9609 4.21071 15.5858 4.58579C15.2108 4.96086 15.0001 5.46957 15.0001 6C15.0001 6.53043 15.2108 7.03914 15.5858 7.41421C15.9609 7.78929 16.4696 8 17.0001 8C17.5305 8 18.0392 7.78929 18.4143 7.41421C18.7893 7.03914 19.0001 6.53043 19.0001 6C19.0001 5.46957 18.7893 4.96086 18.4143 4.58579C18.0392 4.21071 17.5305 4 17.0001 4ZM11.0001 7.76L7.10006 11.66C5.25006 13.5 4.31006 14.85 3.06006 18.16L4.94006 18.86C5.94006 16.2 6.66006 15.14 7.87006 13.84L9.22006 15.19L4.27006 20.14L5.69006 21.56L11.0001 16.24V7.76Z" />
    </Svg>
  );
};
