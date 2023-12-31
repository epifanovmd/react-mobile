import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartDonutVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 2.0498C18.05 2.5498 22 6.8198 22 11.9998C22 13.4498 21.68 14.8298 21.12 16.0698L18.5 14.5398C18.82 13.7498 19 12.8998 19 11.9998C19 8.4698 16.39 5.5698 13 5.0798V2.0498ZM12 18.9998C14.21 18.9998 16.17 17.9998 17.45 16.3798L20.05 17.9098C18.23 20.3898 15.3 21.9998 12 21.9998C6.47 21.9998 2 17.4998 2 11.9998C2 6.8098 5.94 2.5498 11 2.0498V5.0798C7.61 5.5698 5 8.4698 5 11.9998C5 13.8563 5.7375 15.6368 7.05025 16.9496C8.36301 18.2623 10.1435 18.9998 12 18.9998ZM12 5.9998C13.5913 5.9998 15.1174 6.63195 16.2426 7.75716C17.3679 8.88238 18 10.4085 18 11.9998C18 14.9698 15.84 17.4398 13 17.9198V14.8298C14.17 14.4198 15 13.3098 15 11.9998C15 11.2042 14.6839 10.4411 14.1213 9.87848C13.5587 9.31587 12.7956 8.9998 12 8.9998L11.45 9.0498L9.91 6.3798C10.56 6.1298 11.26 5.9998 12 5.9998ZM6 11.9998C6 10.1398 6.85 8.4998 8.18 7.3798L9.72 10.0498C9.27 10.5698 9 11.2598 9 11.9998C9 13.3098 9.83 14.4198 11 14.8298V17.9198C8.16 17.4398 6 14.9698 6 11.9998Z" />
    </Svg>
  );
};
