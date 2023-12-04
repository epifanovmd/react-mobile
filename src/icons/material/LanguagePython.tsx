import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguagePythonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.14 7.5C19.8985 7.5 20.626 7.80132 21.1623 8.33767C21.6987 8.87403 22 9.60148 22 10.36V14.14C22 14.8985 21.6987 15.626 21.1623 16.1623C20.626 16.6987 19.8985 17 19.14 17H12C12 17.39 12.32 17.96 12.71 17.96H17V19.64C17 20.3985 16.6987 21.126 16.1623 21.6623C15.626 22.1987 14.8985 22.5 14.14 22.5H9.86C9.10148 22.5 8.37403 22.1987 7.83767 21.6623C7.30132 21.126 7 20.3985 7 19.64V15.89C7 14.31 8.28 13.04 9.86 13.04H15.11C16.69 13.04 17.96 11.76 17.96 10.18V7.5H19.14ZM14.86 19.29C14.46 19.29 14.14 19.59 14.14 20.18C14.14 20.77 14.46 20.89 14.86 20.89C14.9532 20.89 15.0456 20.8716 15.1317 20.836C15.2178 20.8003 15.2961 20.748 15.362 20.682C15.428 20.6161 15.4803 20.5378 15.516 20.4517C15.5516 20.3656 15.57 20.2732 15.57 20.18C15.57 19.59 15.25 19.29 14.86 19.29ZM4.86 17.5C3.28 17.5 2 16.22 2 14.64V10.86C2 9.28 3.28 8 4.86 8H12C12 7.61 11.68 7.04 11.29 7.04H7V5.36C7 3.78 8.28 2.5 9.86 2.5H14.14C15.72 2.5 17 3.78 17 5.36V9.11C17 10.69 15.72 11.96 14.14 11.96H8.89C7.31 11.96 6.04 13.24 6.04 14.82V17.5H4.86ZM9.14 5.71C9.54 5.71 9.86 5.41 9.86 4.82C9.86 4.23 9.54 4.11 9.14 4.11C8.75 4.11 8.43 4.23 8.43 4.82C8.43 5.41 8.75 5.71 9.14 5.71Z" />
    </Svg>
  );
};
