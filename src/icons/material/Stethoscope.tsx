import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StethoscopeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 8C19.56 8 20 8.43 20 9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10C18.43 10 18 9.55 18 9C18 8.43 18.43 8 19 8ZM2 2V11C2 13.96 4.19 16.5 7.14 16.91C7.76 19.92 10.42 22 13.5 22C14.3536 22 15.1988 21.8319 15.9874 21.5052C16.7761 21.1786 17.4926 20.6998 18.0962 20.0962C18.6998 19.4926 19.1786 18.7761 19.5052 17.9874C19.8319 17.1988 20 16.3536 20 15.5V11.81C21.16 11.39 22 10.29 22 9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6C18.2044 6 17.4413 6.31607 16.8787 6.87868C16.3161 7.44129 16 8.20435 16 9C16 10.29 16.84 11.4 18 11.81V15.41C18 17.91 16 19.91 13.5 19.91C11.5 19.91 9.82 18.7 9.22 16.9C12 16.3 14 13.8 14 11V2H10V5H12V11C12 12.0609 11.5786 13.0783 10.8284 13.8284C10.0783 14.5786 9.06087 15 8 15C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11V5H6V2H2Z" />
    </Svg>
  );
};
