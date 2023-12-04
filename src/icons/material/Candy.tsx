import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CandyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.54 8.45992C17.5 10.4199 17.5 13.5799 15.54 15.5399C13.58 17.4999 10.42 17.4999 8.47004 15.5399C6.52004 13.5799 6.50004 10.4199 8.47004 8.45992C10.44 6.49992 13.58 6.49992 15.54 8.45992ZM19.47 4.54992C19.47 4.54992 18.5 4.66992 17.43 5.35992C17.28 4.31992 16.78 3.26992 15.93 2.41992C14.68 3.65992 14.53 5.21992 14.83 6.33992C16.22 6.69992 17.3 7.77992 17.66 9.16992C18.78 9.46992 20.34 9.31992 21.58 8.06992C20.74 7.22992 19.71 6.73992 18.68 6.57992C19.07 5.99992 19.38 5.32992 19.47 4.54992ZM4.53004 19.4499C4.53004 19.4499 5.50004 19.3299 6.57004 18.6399C6.72004 19.6799 7.22004 20.7299 8.07004 21.5799C9.32004 20.3399 9.47004 18.7799 9.17004 17.6599C7.78004 17.2999 6.70004 16.2199 6.34004 14.8299C5.22004 14.5299 3.66004 14.6799 2.42004 15.9299C3.26004 16.7699 4.29004 17.2699 5.32004 17.4199C4.93004 17.9999 4.62004 18.6799 4.53004 19.4499Z" />
    </Svg>
  );
};
