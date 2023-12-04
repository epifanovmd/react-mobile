import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseEyeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.1 19.7L8.8 19L9 18.6C7.1 18.1 6 17.3 6 17V14.8C7.3 15.4 8.8 15.8 10.6 16C11.3 15.2 12.2 14.5 13.1 14H12C9.6 14 7.3 13.4 6 12.5V9.6C7.5 10.4 9.6 11 12 11C14.4 11 16.5 10.5 18 9.6V12.4C17.7 12.6 17.4 12.8 17 13C18 13 19 13.2 20 13.6V7C20 4.8 16.4 3 12 3C7.6 3 4 4.8 4 7V17C4 18.8 6.4 20.3 9.7 20.8C9.5 20.5 9.3 20.1 9.1 19.7ZM12 5C15.9 5 18 6.5 18 7C18 7.5 15.9 9 12 9C8.1 9 6 7.5 6 7C6 6.5 8.1 5 12 5ZM17 18C17.6 18 18 18.4 18 19C18 19.6 17.6 20 17 20C16.4 20 16 19.6 16 19C16 18.4 16.4 18 17 18ZM17 15C14.3 15 11.9 16.7 11 19C11.9 21.3 14.3 23 17 23C19.7 23 22.1 21.3 23 19C22.1 16.7 19.7 15 17 15ZM17 21.5C15.6 21.5 14.5 20.4 14.5 19C14.5 17.6 15.6 16.5 17 16.5C18.4 16.5 19.5 17.6 19.5 19C19.5 20.4 18.4 21.5 17 21.5Z" />
    </Svg>
  );
};
