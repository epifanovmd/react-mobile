import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PuzzleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5 11H19V7C19 5.89 18.1 5 17 5H13V3.5C13 2.83696 12.7366 2.20107 12.2678 1.73223C11.7989 1.26339 11.163 1 10.5 1C9.83696 1 9.20107 1.26339 8.73223 1.73223C8.26339 2.20107 8 2.83696 8 3.5V5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V10.8H3.5C5 10.8 6.2 12 6.2 13.5C6.2 15 5 16.2 3.5 16.2H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H7.8V20.5C7.8 19 9 17.8 10.5 17.8C12 17.8 13.2 19 13.2 20.5V22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V16H20.5C21.163 16 21.7989 15.7366 22.2678 15.2678C22.7366 14.7989 23 14.163 23 13.5C23 12.837 22.7366 12.2011 22.2678 11.7322C21.7989 11.2634 21.163 11 20.5 11Z" />
    </Svg>
  );
};
