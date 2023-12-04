import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseEyeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 18C17.6 18 18 18.4 18 19C18 19.6 17.6 20 17 20C16.4 20 16 19.6 16 19C16 18.4 16.4 18 17 18ZM17 15C14.3 15 11.9 16.7 11 19C11.9 21.3 14.3 23 17 23C19.7 23 22.1 21.3 23 19C22.1 16.7 19.7 15 17 15ZM17 21.5C15.6 21.5 14.5 20.4 14.5 19C14.5 17.6 15.6 16.5 17 16.5C18.4 16.5 19.5 17.6 19.5 19C19.5 20.4 18.4 21.5 17 21.5ZM9.1 19.7L8.8 19H4V8H20V13.6C20.7 13.9 21.4 14.2 22 14.7V8C22 7.5 21.8 7 21.4 6.6C21 6.2 20.6 6 20 6H16V4C16 3.4 15.8 3 15.4 2.6C15 2.2 14.6 2 14 2H10C9.4 2 9 2.2 8.6 2.6C8.2 3 8 3.4 8 4V6H4C3.4 6 3 6.2 2.6 6.6C2.2 7 2 7.5 2 8V19C2 19.5 2.2 20 2.6 20.4C3 20.8 3.4 21 4 21H9.8C9.5 20.6 9.3 20.2 9.1 19.7ZM10 4H14V6H10V4Z" />
    </Svg>
  );
};
