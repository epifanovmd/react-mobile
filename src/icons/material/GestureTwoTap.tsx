import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureTwoTapIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 15.14V21.5C18.97 22.32 18.32 22.97 17.5 23H11C10.62 23 10.26 22.85 9.99998 22.57L5.09998 18.37L5.83998 17.6C6.02998 17.39 6.29998 17.28 6.57998 17.28H6.79998L9.99998 19V9C9.99998 8.73478 10.1053 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5195 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V7C12 6.73478 12.1053 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6C13.2652 6 13.5195 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V12L18.15 13.84C18.66 14.07 19 14.58 19 15.14ZM15 10.45V9.24V9.23C15.23 9.03 15.42 8.79 15.57 8.54C15.84 8.09 16 7.56 16 7C16 6.20435 15.6839 5.44129 15.1213 4.87868C14.5587 4.31607 13.7956 4 13 4C12.21 4 11.5 4.31 10.95 4.81L10.81 4.95C10.68 5.09 10.56 5.24 10.46 5.4C10.36 5.56 10.27 5.74 10.2 5.92C10.17 6 10.15 6.06 10.13 6.13C8.89998 6.5 7.99998 7.65 7.99998 9C7.99998 9.7 8.23998 10.34 8.63998 10.85C8.73998 11 8.86998 11.11 8.99998 11.23V11.24V12.46C7.79998 11.77 6.99998 10.5 6.99998 9C6.99998 7.38 7.96998 6 9.34998 5.35C9.99998 3.97 11.38 3 13 3C14.0608 3 15.0783 3.42143 15.8284 4.17157C16.5785 4.92172 17 5.93913 17 7C17 8.5 16.2 9.77 15 10.46V10.45Z" />
    </Svg>
  );
};
