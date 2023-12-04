import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThoughtBubbleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.5 19C3.89782 19 4.27936 19.158 4.56066 19.4393C4.84196 19.7206 5 20.1022 5 20.5C5 20.8978 4.84196 21.2794 4.56066 21.5607C4.27936 21.842 3.89782 22 3.5 22C3.10218 22 2.72064 21.842 2.43934 21.5607C2.15804 21.2794 2 20.8978 2 20.5C2 20.1022 2.15804 19.7206 2.43934 19.4393C2.72064 19.158 3.10218 19 3.5 19ZM8.5 16C9.16304 16 9.79893 16.2634 10.2678 16.7322C10.7366 17.2011 11 17.837 11 18.5C11 19.163 10.7366 19.7989 10.2678 20.2678C9.79893 20.7366 9.16304 21 8.5 21C7.83696 21 7.20107 20.7366 6.73223 20.2678C6.26339 19.7989 6 19.163 6 18.5C6 17.837 6.26339 17.2011 6.73223 16.7322C7.20107 16.2634 7.83696 16 8.5 16ZM14.5 15C13.31 15 12.23 14.5 11.5 13.65C10.77 14.5 9.69 15 8.5 15C6.54 15 4.91 13.59 4.57 11.74C3.07 11.16 2 9.7 2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4L6.77 4.07C7.5 3.41 8.45 3 9.5 3C10.69 3 11.77 3.5 12.5 4.35C13.23 3.5 14.31 3 15.5 3C17.46 3 19.09 4.41 19.43 6.26C20.93 6.84 22 8.3 22 10C22 11.0609 21.5786 12.0783 20.8284 12.8284C20.0783 13.5786 19.0609 14 18 14L17.23 13.93C16.5 14.59 15.55 15 14.5 15ZM6 6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8C4 8.53043 4.21071 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10C6.33 10 6.64 9.92 6.92 9.78C6.66 10.12 6.5 10.54 6.5 11C6.5 11.5304 6.71071 12.0391 7.08579 12.4142C7.46086 12.7893 7.96957 13 8.5 13C9.1 13 9.64 12.73 10 12.31L11.47 10.63L13 12.34C13.38 12.74 13.91 13 14.5 13C15.5 13 16.33 12.26 16.5 11.3C16.84 11.73 17.39 12 18 12C18.5304 12 19.0391 11.7893 19.4142 11.4142C19.7893 11.0391 20 10.5304 20 10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8C17.67 8 17.36 8.08 17.08 8.22C17.34 7.88 17.5 7.46 17.5 7C17.5 6.46957 17.2893 5.96086 16.9142 5.58579C16.5391 5.21071 16.0304 5 15.5 5C14.91 5 14.38 5.26 14 5.66L12.47 7.37L11 5.69C10.64 5.27 10.1 5 9.5 5C8.5 5 7.67 5.74 7.5 6.7C7.16 6.27 6.61 6 6 6ZM8.5 17.5C8.23478 17.5 7.98043 17.6054 7.79289 17.7929C7.60536 17.9804 7.5 18.2348 7.5 18.5C7.5 18.7652 7.60536 19.0196 7.79289 19.2071C7.98043 19.3946 8.23478 19.5 8.5 19.5C8.76522 19.5 9.01957 19.3946 9.20711 19.2071C9.39464 19.0196 9.5 18.7652 9.5 18.5C9.5 18.2348 9.39464 17.9804 9.20711 17.7929C9.01957 17.6054 8.76522 17.5 8.5 17.5Z" />
    </Svg>
  );
};
