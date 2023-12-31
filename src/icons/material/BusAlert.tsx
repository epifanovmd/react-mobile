import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BusAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 1C17.8565 1 19.637 1.7375 20.9497 3.05025C22.2625 4.36301 23 6.14348 23 8C23 11.53 20.39 14.45 17 14.93V18C17 18.84 16.65 19.58 15.96 20.2V22C15.96 22.27 15.87 22.5 15.68 22.71C15.5 22.91 15.26 23 15 23H14C13.71 23 13.47 22.91 13.27 22.71C13.06 22.5 12.96 22.27 12.96 22V21H5.04V22C5.04 22.27 4.94 22.5 4.73 22.71C4.53 22.91 4.29 23 4 23H3C2.74 23 2.5 22.91 2.32 22.71C2.13 22.5 2.04 22.27 2.04 22V20.2C1.35 19.58 1 18.84 1 18V8C1 6.42 1.7 5.35 3.07 4.8C4.44 4.26 6.42 4 9 4L10.23 4.03C11.5 2.2 13.61 1 16 1ZM16 3C14.6739 3 13.4021 3.52678 12.4645 4.46447C11.5268 5.40215 11 6.67392 11 8C11 9.32608 11.5268 10.5979 12.4645 11.5355C13.4021 12.4732 14.6739 13 16 13C17.3261 13 18.5979 12.4732 19.5355 11.5355C20.4732 10.5979 21 9.32608 21 8C21 6.67392 20.4732 5.40215 19.5355 4.46447C18.5979 3.52678 17.3261 3 16 3ZM15 10H17V12H15V10ZM15 4H17V9H15V4ZM3 13H11.09C9.8 11.72 9 9.96 9 8H3V13ZM4.5 16C3.69 16 3 16.67 3 17.5C3 17.8978 3.15804 18.2794 3.43934 18.5607C3.72064 18.842 4.10218 19 4.5 19C5.35 19 6 18.33 6 17.5C6 17.1022 5.84196 16.7206 5.56066 16.4393C5.27936 16.158 4.89782 16 4.5 16ZM13.5 16C12.65 16 12 16.67 12 17.5C12 17.8978 12.158 18.2794 12.4393 18.5607C12.7206 18.842 13.1022 19 13.5 19C14.31 19 15 18.33 15 17.5C15 17.1022 14.842 16.7206 14.5607 16.4393C14.2794 16.158 13.8978 16 13.5 16Z" />
    </Svg>
  );
};
