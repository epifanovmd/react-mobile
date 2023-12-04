import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TractorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 4V11.26C3.2 11.9 2 13.6 2 15.5C2 18 4 20 6.5 20C8.79 20 10.71 18.28 10.97 16H15.17C15.06 16.32 15 16.66 15 17C15 17.7956 15.3161 18.5587 15.8787 19.1213C16.4413 19.6839 17.2044 20 18 20C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17C21 16.66 20.94 16.32 20.82 16H22V13C22 11.89 21.11 11 20 11H15.04L13.65 4H5ZM7 6H12L13 11V14H10.74C10.16 12.38 8.71 11.23 7 11.03V6ZM6.5 13.25C7.09674 13.25 7.66903 13.4871 8.09099 13.909C8.51295 14.331 8.75 14.9033 8.75 15.5C8.75 16.0967 8.51295 16.669 8.09099 17.091C7.66903 17.5129 7.09674 17.75 6.5 17.75C5.90326 17.75 5.33097 17.5129 4.90901 17.091C4.48705 16.669 4.25 16.0967 4.25 15.5C4.25 14.9033 4.48705 14.331 4.90901 13.909C5.33097 13.4871 5.90326 13.25 6.5 13.25ZM18 15.5C18.3978 15.5 18.7794 15.658 19.0607 15.9393C19.342 16.2206 19.5 16.6022 19.5 17C19.5 17.3978 19.342 17.7794 19.0607 18.0607C18.7794 18.342 18.3978 18.5 18 18.5C17.6022 18.5 17.2206 18.342 16.9393 18.0607C16.658 17.7794 16.5 17.3978 16.5 17C16.5 16.6022 16.658 16.2206 16.9393 15.9393C17.2206 15.658 17.6022 15.5 18 15.5Z" />
    </Svg>
  );
};
