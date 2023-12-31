import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThoughtBubbleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.5 19C3.89782 19 4.27936 19.158 4.56066 19.4393C4.84196 19.7206 5 20.1022 5 20.5C5 20.8978 4.84196 21.2794 4.56066 21.5607C4.27936 21.842 3.89782 22 3.5 22C3.10218 22 2.72064 21.842 2.43934 21.5607C2.15804 21.2794 2 20.8978 2 20.5C2 20.1022 2.15804 19.7206 2.43934 19.4393C2.72064 19.158 3.10218 19 3.5 19ZM8.5 16C9.16304 16 9.79893 16.2634 10.2678 16.7322C10.7366 17.2011 11 17.837 11 18.5C11 19.163 10.7366 19.7989 10.2678 20.2678C9.79893 20.7366 9.16304 21 8.5 21C7.83696 21 7.20107 20.7366 6.73223 20.2678C6.26339 19.7989 6 19.163 6 18.5C6 17.837 6.26339 17.2011 6.73223 16.7322C7.20107 16.2634 7.83696 16 8.5 16ZM14.5 15C13.31 15 12.23 14.5 11.5 13.65C10.77 14.5 9.69 15 8.5 15C6.54 15 4.91 13.59 4.57 11.74C3.07 11.16 2 9.7 2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4C6.26 4 6.5 4.03 6.77 4.07C7.5 3.41 8.45 3 9.5 3C10.69 3 11.77 3.5 12.5 4.35C13.23 3.5 14.31 3 15.5 3C17.46 3 19.09 4.41 19.43 6.26C20.93 6.84 22 8.3 22 10C22 11.0609 21.5786 12.0783 20.8284 12.8284C20.0783 13.5786 19.0609 14 18 14L17.23 13.93C16.5 14.59 15.55 15 14.5 15Z" />
    </Svg>
  );
};
