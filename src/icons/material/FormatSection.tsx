import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatSectionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.67 4.42C14.7 3.84 13.58 3.54 12.45 3.56C10.87 3.56 9.65998 4.34 9.65998 5.56C9.65998 6.96 11 7.47 13 8.14C15.5 8.95 17.4 9.97 17.4 12.38C17.36 13.69 16.69 14.89 15.6 15.61C16.25 16.22 16.61 17.08 16.6 17.97C16.6 20.79 14 21.97 11.5 21.97C10.04 22.03 8.58998 21.64 7.34998 20.87L7.99998 19.34C9.03998 20.05 10.27 20.43 11.53 20.44C13.25 20.44 14.53 19.66 14.53 18.24C14.53 17 13.75 16.31 11.25 15.45C8.49998 14.5 6.59998 13.5 6.59998 11.21C6.66998 9.89 7.42998 8.69 8.59998 8.07C7.96998 7.5 7.60998 6.67 7.59998 5.81C7.59998 3.45 9.76998 2 12.53 2C13.82 2 15.09 2.29 16.23 2.89L15.67 4.42ZM11.35 13.42C12.41 13.75 13.44 14.18 14.41 14.71C15.06 14.22 15.43 13.45 15.41 12.64C15.41 11.64 14.77 10.76 13 10.14C11.89 9.77 10.78 9.31 9.71998 8.77C8.96998 9.22 8.49998 10.03 8.49998 10.91C8.49998 11.88 9.22998 12.68 11.35 13.42Z" />
    </Svg>
  );
};
