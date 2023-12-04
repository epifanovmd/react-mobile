import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyBuggyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22C14.4696 22 13.9609 21.7893 13.5858 21.4142C13.2107 21.0391 13 20.5304 13 20C13 19.4696 13.2107 18.9609 13.5858 18.5858C13.9609 18.2107 14.4696 18 15 18C15.5304 18 16.0391 18.2107 16.4142 18.5858C16.7893 18.9609 17 19.4696 17 20ZM7 20C7 20.5304 6.78929 21.0391 6.41421 21.4142C6.03914 21.7893 5.53043 22 5 22C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20C3 19.4696 3.21071 18.9609 3.58579 18.5858C3.96086 18.2107 4.46957 18 5 18C5.53043 18 6.03914 18.2107 6.41421 18.5858C6.78929 18.9609 7 19.4696 7 20ZM17.61 3C16.95 3 16.44 3.2 16 3.5C15.32 3.91 14.88 4.59 14.47 5.07L5.71 15.35C5.16 16 5.62 17 6.47 17H14C15.11 17 16 16.1 16 15V6.38C16.58 5.7 16.93 5 17.61 5C18.38 5 19 5.66 19 6.5V7H21V6.5C21 4.56 19.5 3 17.61 3ZM8.86 3.09C7.04 3.16 5.23 3.76 3.68 4.9L8.44 9.66L12.32 5.1C12.59 4.78 12.91 4.38 13.3 4C12.14 3.45 10.9 3.15 9.65 3.09C9.39 3.08 9.12 3.08 8.86 3.09Z" />
    </Svg>
  );
};
