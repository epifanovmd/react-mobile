import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarConnectedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 14H19L17.5 9.5H6.5L5 14ZM17.5 19C17.8978 19 18.2794 18.842 18.5607 18.5607C18.842 18.2794 19 17.8978 19 17.5C19 17.1022 18.842 16.7206 18.5607 16.4393C18.2794 16.158 17.8978 16 17.5 16C17.1022 16 16.7206 16.158 16.4393 16.4393C16.158 16.7206 16 17.1022 16 17.5C16 17.8978 16.158 18.2794 16.4393 18.5607C16.7206 18.842 17.1022 19 17.5 19ZM6.5 19C6.89782 19 7.27936 18.842 7.56066 18.5607C7.84196 18.2794 8 17.8978 8 17.5C8 17.1022 7.84196 16.7206 7.56066 16.4393C7.27936 16.158 6.89782 16 6.5 16C6.10218 16 5.72064 16.158 5.43934 16.4393C5.15804 16.7206 5 17.1022 5 17.5C5 17.8978 5.15804 18.2794 5.43934 18.5607C5.72064 18.842 6.10218 19 6.5 19ZM18.92 9L21 15V23C21 23.2652 20.8946 23.5196 20.7071 23.7071C20.5196 23.8946 20.2652 24 20 24H19C18.7348 24 18.4804 23.8946 18.2929 23.7071C18.1054 23.5196 18 23.2652 18 23V22H6V23C6 23.2652 5.89464 23.5196 5.70711 23.7071C5.51957 23.8946 5.26522 24 5 24H4C3.73478 24 3.48043 23.8946 3.29289 23.7071C3.10536 23.5196 3 23.2652 3 23V15L5.08 9C5.28 8.42 5.85 8 6.5 8H17.5C18.15 8 18.72 8.42 18.92 9ZM12 0C14.12 0 16.15 0.86 17.65 2.35L16.23 3.77C15.11 2.65 13.58 2 12 2C10.42 2 8.89 2.65 7.77 3.77L6.36 2.35C7.85 0.86 9.88 0 12 0ZM12 4C13.06 4 14.07 4.44 14.82 5.18L13.4 6.6C13.03 6.23 12.53 6 12 6C11.5 6 10.97 6.23 10.6 6.6L9.18 5.18C9.93 4.44 10.94 4 12 4Z" />
    </Svg>
  );
};
