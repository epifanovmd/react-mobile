import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PaletteOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C17.5 2 22 6 22 11C22 12.5913 21.3679 14.1174 20.2426 15.2426C19.1174 16.3679 17.5913 17 16 17H14.2C13.9 17 13.7 17.2 13.7 17.5C13.7 17.6 13.8 17.7 13.8 17.8C14.2 18.3 14.4 18.9 14.4 19.5C14.5 20.9 13.4 22 12 22ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C12.3 20 12.5 19.8 12.5 19.5C12.5 19.3 12.4 19.2 12.4 19.1C12 18.6 11.8 18.1 11.8 17.5C11.8 16.1 12.9 15 14.3 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 7.1 16.4 4 12 4ZM6.5 10C7.3 10 8 10.7 8 11.5C8 12.3 7.3 13 6.5 13C5.7 13 5 12.3 5 11.5C5 10.7 5.7 10 6.5 10ZM9.5 6C10.3 6 11 6.7 11 7.5C11 8.3 10.3 9 9.5 9C8.7 9 8 8.3 8 7.5C8 6.7 8.7 6 9.5 6ZM14.5 6C15.3 6 16 6.7 16 7.5C16 8.3 15.3 9 14.5 9C13.7 9 13 8.3 13 7.5C13 6.7 13.7 6 14.5 6ZM17.5 10C18.3 10 19 10.7 19 11.5C19 12.3 18.3 13 17.5 13C16.7 13 16 12.3 16 11.5C16 10.7 16.7 10 17.5 10Z" />
    </Svg>
  );
};
