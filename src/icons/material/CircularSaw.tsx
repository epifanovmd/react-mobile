import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CircularSawIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 11C13.2652 11 13.5196 11.1054 13.7071 11.2929C13.8946 11.4804 14 11.7348 14 12C14 12.2652 13.8946 12.5196 13.7071 12.7071C13.5196 12.8946 13.2652 13 13 13C12.7348 13 12.4804 12.8946 12.2929 12.7071C12.1054 12.5196 12 12.2652 12 12C12 11.7348 12.1054 11.4804 12.2929 11.2929C12.4804 11.1054 12.7348 11 13 11ZM7.86 6.25C9.14 4.87 10.97 4 13 4C16.5 4 19.44 6.61 19.93 10H22V12H16C16 11.2044 15.6839 10.4413 15.1213 9.87868C14.5587 9.31607 13.7956 9 13 9C12.2044 9 11.4413 9.31607 10.8787 9.87868C10.3161 10.4413 10 11.2044 10 12H2V10H2.05C2.25 7.73 3.14 5.66 4.5 4L7.86 6.25ZM6.73 7.89L5.06 6.77C4.53 7.75 4.18 8.84 4.06 10H6.07C6.18 9.25 6.4 8.54 6.73 7.89ZM7.4 15.4L6 14H11.79C12.03 14.42 12.5 14.7 13 14.7C13.5 14.7 13.97 14.42 14.21 14H20V15.4C18.39 14.42 18.46 15.75 18.46 15.75V17.71L16.5 19.67C16 17.92 15.1 18.9 15.1 18.9L13.7 20.3H10.9C11.88 18.69 10.55 18.76 10.55 18.76H8.59L6.63 16.8C8.38 16.31 7.4 15.4 7.4 15.4Z" />
    </Svg>
  );
};
