import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GesturePinchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 9C13 8.73478 13.1054 8.48043 13.2929 8.29289C13.4804 8.10536 13.7348 8 14 8C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V13.47L16.21 13.6L21.15 15.8C21.67 16.04 22 16.56 22 17.14V21.5C21.97 22.32 21.32 22.97 20.5 23H14C13.62 23 13.26 22.85 13 22.57L8.1 18.37L8.84 17.6C9.03 17.39 9.3 17.28 9.58 17.28H9.8L13 19V9ZM14 5C15.42 5 16.74 5.76 17.45 7C18.56 8.9 17.91 11.35 16 12.46V11.23C16.64 10.67 17 9.85 17 9C17 8.20435 16.6839 7.44129 16.1213 6.87868C15.5587 6.31607 14.7956 6 14 6C13.2044 6 12.4413 6.31607 11.8787 6.87868C11.3161 7.44129 11 8.20435 11 9C11 9.85 11.36 10.67 12 11.23V12.46C10.77 11.75 10 10.43 10 9C10 7.93913 10.4214 6.92172 11.1716 6.17157C11.9217 5.42143 12.9391 5 14 5ZM4 9L7 12H5V15H3V12H1L4 9ZM4 7L1 4H3V1H5V4H7L4 7ZM9 14C9.73 14 10.41 14.19 11 14.54V15.76C10.47 15.29 9.77 15 9 15C8.20435 15 7.44129 15.3161 6.87868 15.8787C6.31607 16.4413 6 17.2044 6 18C6 19 6.5 19.87 7.22 20.42L9.31 22H9C7.93913 22 6.92172 21.5786 6.17157 20.8284C5.42143 20.0783 5 19.0609 5 18C5 16.9391 5.42143 15.9217 6.17157 15.1716C6.92172 14.4214 7.93913 14 9 14Z" />
    </Svg>
  );
};
