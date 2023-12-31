import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureTapIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.99998 9C9.99998 8.73478 10.1053 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5195 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V13.47L13.21 13.6L18.15 15.79C18.68 16.03 19 16.56 19 17.14V21.5C18.97 22.32 18.32 22.97 17.5 23H11C10.62 23 10.26 22.85 9.99998 22.57L5.09998 18.37L5.83998 17.6C6.02998 17.39 6.29998 17.28 6.57998 17.28H6.79998L9.99998 19V9ZM11 5C12.0608 5 13.0783 5.42143 13.8284 6.17157C14.5785 6.92172 15 7.93913 15 9C15 10.5 14.2 11.77 13 12.46V11.24C13.61 10.69 14 9.89 14 9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6C10.2043 6 9.44126 6.31607 8.87865 6.87868C8.31605 7.44129 7.99998 8.20435 7.99998 9C7.99998 9.89 8.38998 10.69 8.99998 11.24V12.46C7.79998 11.77 6.99998 10.5 6.99998 9C6.99998 7.93913 7.4214 6.92172 8.17155 6.17157C8.92169 5.42143 9.93911 5 11 5Z" />
    </Svg>
  );
};
