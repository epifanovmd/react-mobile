import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NintendoWiiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.84 16.9409H15.97V10.7909H17.84V16.9409ZM18 8.58094C18 9.19094 17.5 9.69094 16.9 9.69094C16.6056 9.69094 16.3233 9.57399 16.1151 9.36583C15.9069 9.15766 15.79 8.87533 15.79 8.58094C15.79 7.96094 16.29 7.46094 16.9 7.46094C17.5 7.46094 18 7.96094 18 8.58094ZM21.82 16.9409H19.94V10.7909H21.82V16.9409ZM22 8.58094C22 9.19094 21.5 9.69094 20.88 9.69094C20.5856 9.69094 20.3033 9.57399 20.0951 9.36583C19.8869 9.15766 19.77 8.87533 19.77 8.58094C19.77 7.96094 20.27 7.46094 20.88 7.46094C21.5 7.46094 22 7.96094 22 8.58094ZM12.9 8.05094H14.9L12.78 15.5009C12.78 15.5009 12.5 17.0409 11.28 17.0409C10.07 17.0409 9.79 15.5009 9.79 15.5009L8.45 10.6409L7.11 15.5009C7.11 15.5009 6.82 17.0409 5.61 17.0409C4.4 17.0409 4.12 15.5009 4.12 15.5009L2 8.05094H4L5.72 14.6709L7.11 9.30094C7.43 7.95094 8.45 7.97094 8.45 7.97094C8.45 7.97094 9.47 7.95094 9.79 9.30094L11.17 14.6709L12.9 8.05094Z" />
    </Svg>
  );
};
