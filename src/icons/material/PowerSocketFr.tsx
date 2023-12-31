import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerSocketFrIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.22 2C3.63122 2 3.06655 2.23389 2.65022 2.65022C2.23389 3.06655 2 3.63122 2 4.22V19.78C2 21 3 22 4.22 22H19.78C20.3688 22 20.9334 21.7661 21.3498 21.3498C21.7661 20.9334 22 20.3688 22 19.78V4.22C22 3 21 2 19.78 2H4.22ZM12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4ZM12 6C11.6022 6 11.2206 6.15804 10.9393 6.43934C10.658 6.72064 10.5 7.10218 10.5 7.5C10.5 7.89782 10.658 8.27936 10.9393 8.56066C11.2206 8.84196 11.6022 9 12 9C12.3978 9 12.7794 8.84196 13.0607 8.56066C13.342 8.27936 13.5 7.89782 13.5 7.5C13.5 7.10218 13.342 6.72064 13.0607 6.43934C12.7794 6.15804 12.3978 6 12 6ZM7.5 10.5C7.10218 10.5 6.72064 10.658 6.43934 10.9393C6.15804 11.2206 6 11.6022 6 12C6 12.83 6.66 13.5 7.5 13.5C7.89782 13.5 8.27936 13.342 8.56066 13.0607C8.84196 12.7794 9 12.3978 9 12C9 11.6022 8.84196 11.2206 8.56066 10.9393C8.27936 10.658 7.89782 10.5 7.5 10.5ZM16.5 10.5C16.1022 10.5 15.7206 10.658 15.4393 10.9393C15.158 11.2206 15 11.6022 15 12C15 12.3978 15.158 12.7794 15.4393 13.0607C15.7206 13.342 16.1022 13.5 16.5 13.5C16.8978 13.5 17.2794 13.342 17.5607 13.0607C17.842 12.7794 18 12.3978 18 12C18 11.6022 17.842 11.2206 17.5607 10.9393C17.2794 10.658 16.8978 10.5 16.5 10.5Z" />
    </Svg>
  );
};
