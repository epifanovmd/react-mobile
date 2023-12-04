import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadQuestionOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9.00004V18H8.00004C6.89004 18 6.00004 17.11 6.00004 16V13H4.50004C4.08004 13 3.84004 12.5 4.08004 12.19L6.00004 9.66C6.19004 5.95 9.23004 3 13 3ZM10.32 7.39H12.25C12.26 7.09 12.35 6.86 12.53 6.7C12.71 6.55 12.93 6.47 13.19 6.47C13.5 6.47 13.76 6.57 13.94 6.75C14.12 6.94 14.2 7.2 14.2 7.5C14.2 7.82 14.13 8.09 13.97 8.32C13.83 8.55 13.62 8.75 13.36 8.91C12.85 9.25 12.5 9.55 12.31 9.82C12.11 10.08 12 10.5 12 11H14C14 10.69 14.04 10.44 14.13 10.26C14.22 10.07 14.39 9.9 14.64 9.74C15.09 9.5 15.46 9.21 15.75 8.81C16.04 8.41 16.19 8 16.19 7.5C16.19 6.74 15.92 6.13 15.38 5.68C14.85 5.23 14.12 5 13.19 5C12.32 5 11.62 5.2 11.08 5.59C10.56 6 10.3 6.57 10.31 7.36L10.32 7.39ZM12 14H14V12H12V14ZM13 1C8.41004 1 4.61004 4.42 4.06004 8.9L2.50004 11H2.47004L2.45004 11.03C1.90004 11.79 1.83004 12.79 2.26004 13.62C2.62004 14.31 3.26004 14.79 4.00004 14.94V16C4.00004 17.85 5.28004 19.42 7.00004 19.87V23H18V17.5C20.5 15.83 22 13.06 22 10C22 5.03 17.96 1 13 1Z" />
    </Svg>
  );
};
