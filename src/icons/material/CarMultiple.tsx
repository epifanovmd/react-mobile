import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 11L9.5 6.5H18.5L20 11H8ZM18.5 16C18.1022 16 17.7206 15.842 17.4393 15.5607C17.158 15.2794 17 14.8978 17 14.5C17 14.1022 17.158 13.7206 17.4393 13.4393C17.7206 13.158 18.1022 13 18.5 13C18.8978 13 19.2794 13.158 19.5607 13.4393C19.842 13.7206 20 14.1022 20 14.5C20 14.8978 19.842 15.2794 19.5607 15.5607C19.2794 15.842 18.8978 16 18.5 16ZM9.5 16C9.10218 16 8.72064 15.842 8.43934 15.5607C8.15804 15.2794 8 14.8978 8 14.5C8 14.1022 8.15804 13.7206 8.43934 13.4393C8.72064 13.158 9.10218 13 9.5 13C9.89782 13 10.2794 13.158 10.5607 13.4393C10.842 13.7206 11 14.1022 11 14.5C11 14.8978 10.842 15.2794 10.5607 15.5607C10.2794 15.842 9.89782 16 9.5 16ZM19.92 6C19.71 5.4 19.14 5 18.5 5H9.5C8.86 5 8.29 5.4 8.08 6L6 12V20C6 20.2652 6.10536 20.5196 6.29289 20.7071C6.48043 20.8946 6.73478 21 7 21H8C8.26522 21 8.51957 20.8946 8.70711 20.7071C8.89464 20.5196 9 20.2652 9 20V19H19V20C19 20.2652 19.1054 20.5196 19.2929 20.7071C19.4804 20.8946 19.7348 21 20 21H21C21.2652 21 21.5196 20.8946 21.7071 20.7071C21.8946 20.5196 22 20.2652 22 20V12L19.92 6ZM14.92 3C14.71 2.4 14.14 2 13.5 2H4.5C3.86 2 3.29 2.4 3.08 3L1 9V17C1 17.2652 1.10536 17.5196 1.29289 17.7071C1.48043 17.8946 1.73478 18 2 18H3C3.26522 18 3.51957 17.8946 3.70711 17.7071C3.89464 17.5196 4 17.2652 4 17V12.91C3.22 12.63 2.82 11.77 3.1 11C3.32 10.4 3.87 10 4.5 10H4.57L5.27 8H3L4.5 3.5H15.09L14.92 3Z" />
    </Svg>
  );
};
