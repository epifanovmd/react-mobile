import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VimeoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 7.41991C21.91 9.36991 20.55 12.0399 17.92 15.4399C15.2 18.9999 12.9 20.7499 11 20.7499C9.85 20.7499 8.86 19.6699 8.05 17.4999C7.5 15.5399 7 13.5599 6.44 11.5799C5.84 9.41991 5.2 8.33991 4.5 8.33991C4.36 8.33991 3.84 8.65991 2.94 9.28991L2 8.06991C3 7.19991 3.96 6.32991 4.92 5.45991C6.24 4.31991 7.23 3.71991 7.88 3.65991C9.44 3.49991 10.4 4.57991 10.76 6.85991C11.15 9.32991 11.42 10.8599 11.57 11.4599C12 13.4999 12.5 14.4999 13.05 14.4999C13.47 14.4999 14.1 13.8599 14.94 12.5299C15.78 11.2099 16.23 10.1999 16.29 9.49991C16.41 8.35991 15.96 7.78991 14.94 7.78991C14.46 7.78991 13.97 7.89991 13.46 8.11991C14.44 4.88991 16.32 3.31991 19.09 3.40991C21.15 3.46991 22.12 4.80991 22 7.41991Z" />
    </Svg>
  );
};
