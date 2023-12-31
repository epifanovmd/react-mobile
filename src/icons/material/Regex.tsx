import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RegexIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 16.92C15.67 16.97 15.34 17 15 17C14.66 17 14.33 16.97 14 16.92V13.41L11.5 15.89C11 15.5 10.5 15 10.11 14.5L12.59 12H9.08C9.03 11.67 9 11.34 9 11C9 10.66 9.03 10.33 9.08 10H12.59L10.11 7.5C10.3 7.25 10.5 7 10.76 6.76C11 6.5 11.25 6.3 11.5 6.11L14 8.59V5.08C14.33 5.03 14.66 5 15 5C15.34 5 15.67 5.03 16 5.08V8.59L18.5 6.11C19 6.5 19.5 7 19.89 7.5L17.41 10H20.92C20.97 10.33 21 10.66 21 11C21 11.34 20.97 11.67 20.92 12H17.41L19.89 14.5C19.7 14.75 19.5 15 19.24 15.24C19 15.5 18.75 15.7 18.5 15.89L16 13.41V16.92ZM5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19Z" />
    </Svg>
  );
};
