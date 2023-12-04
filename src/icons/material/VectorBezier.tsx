import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorBezierIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 4C7.10218 4 6.72064 4.15804 6.43934 4.43934C6.15804 4.72064 6 5.10218 6 5.5C6 5.89782 6.15804 6.27936 6.43934 6.56066C6.72064 6.84196 7.10218 7 7.5 7C8.13 7 8.7 6.6 8.91 6H13C13.67 5.33 14.33 5 15 5H8.91C8.7 4.4 8.13 4 7.5 4ZM19 5C8 5 14 17 5 17V19C16 19 10 7 19 7V5ZM16.5 17C15.87 17 15.3 17.4 15.09 18H11C10.33 18.67 9.67 19 9 19H15.09C15.3 19.6 15.87 20 16.5 20C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5C18 18.1022 17.842 17.7206 17.5607 17.4393C17.2794 17.158 16.8978 17 16.5 17Z" />
    </Svg>
  );
};
