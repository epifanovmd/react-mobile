import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 3C15.42 3 19 4.79 19 7C19 9.21 15.42 11 11 11C6.58 11 3 9.21 3 7C3 4.79 6.58 3 11 3ZM19 12.03C17.11 12.24 15.57 13.62 15.13 15.43C13.92 15.79 12.5 16 11 16C6.58 16 3 14.21 3 12V9C3 11.21 6.58 13 11 13C15.42 13 19 11.21 19 9V12.03ZM14 17.71V20.71C13.07 20.9 12.06 21 11 21C6.58 21 3 19.21 3 17V14C3 16.21 6.58 18 11 18C12.06 18 13.07 17.9 14 17.71ZM19.5 14C20.163 14 20.7989 14.2634 21.2678 14.7322C21.7366 15.2011 22 15.837 22 16.5V17C22.2652 17 22.5196 17.1054 22.7071 17.2929C22.8946 17.4804 23 17.7348 23 18V22C23 22.2652 22.8946 22.5196 22.7071 22.7071C22.5196 22.8946 22.2652 23 22 23H17C16.7348 23 16.4804 22.8946 16.2929 22.7071C16.1054 22.5196 16 22.2652 16 22V18C16 17.7348 16.1054 17.4804 16.2929 17.2929C16.4804 17.1054 16.7348 17 17 17V16.5C17 15.837 17.2634 15.2011 17.7322 14.7322C18.2011 14.2634 18.837 14 19.5 14ZM19.5 15C19.1022 15 18.7206 15.158 18.4393 15.4393C18.158 15.7206 18 16.1022 18 16.5V17H21V16.5C21 16.1022 20.842 15.7206 20.5607 15.4393C20.2794 15.158 19.8978 15 19.5 15Z" />
    </Svg>
  );
};
