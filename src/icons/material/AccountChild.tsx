import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountChildIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5C15 5.79565 14.6839 6.55871 14.1213 7.12132C13.5587 7.68393 12.7956 8 12 8C11.2044 8 10.4413 7.68393 9.87868 7.12132C9.31607 6.55871 9 5.79565 9 5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2ZM12 9C13.63 9 15.12 9.35 16.5 10.05C17.84 10.76 18.5 11.61 18.5 12.61V18.38C18.5 19.5 17.64 20.44 15.89 21.19V19C15.89 18.05 15.03 17.38 13.31 16.97C12.75 16.84 12.31 16.78 12 16.78C11.13 16.78 10.3 16.95 9.54 17.3C8.77 17.64 8.31 18.08 8.16 18.61C9.5 19.14 10.78 19.41 12 19.41L13 19.31V21.94L12 22C10.63 22 9.33 21.72 8.11 21.19C6.36 20.44 5.5 19.5 5.5 18.38V12.61C5.5 11.61 6.16 10.76 7.5 10.05C8.88 9.35 10.38 9 12 9ZM12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11Z" />
    </Svg>
  );
};
