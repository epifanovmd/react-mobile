import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerSocketEuIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 10.5C7.89782 10.5 8.27936 10.658 8.56066 10.9393C8.84196 11.2206 9 11.6022 9 12C9 12.3978 8.84196 12.7794 8.56066 13.0607C8.27936 13.342 7.89782 13.5 7.5 13.5C6.66 13.5 6 12.83 6 12C6 11.6022 6.15804 11.2206 6.43934 10.9393C6.72064 10.658 7.10218 10.5 7.5 10.5ZM16.5 10.5C16.8978 10.5 17.2794 10.658 17.5607 10.9393C17.842 11.2206 18 11.6022 18 12C18 12.3978 17.842 12.7794 17.5607 13.0607C17.2794 13.342 16.8978 13.5 16.5 13.5C16.1022 13.5 15.7206 13.342 15.4393 13.0607C15.158 12.7794 15 12.3978 15 12C15 11.6022 15.158 11.2206 15.4393 10.9393C15.7206 10.658 16.1022 10.5 16.5 10.5ZM4.22 2H19.78C21 2 22 3 22 4.22V19.78C22 20.3688 21.7661 20.9334 21.3498 21.3498C20.9334 21.7661 20.3688 22 19.78 22H4.22C3 22 2 21 2 19.78V4.22C2 3.63122 2.23389 3.06655 2.65022 2.65022C3.06655 2.23389 3.63122 2 4.22 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z" />
    </Svg>
  );
};
