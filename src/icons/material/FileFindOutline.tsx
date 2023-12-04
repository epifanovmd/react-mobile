import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileFindOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM6 4H13L18 9V17.58L16.16 15.74C17.44 13.8 17.23 11.17 15.5 9.46C14.55 8.5 13.28 8 12 8C10.72 8 9.45 8.5 8.47 9.46C6.5 11.41 6.5 14.57 8.47 16.5C9.44 17.5 10.72 17.97 12 17.97C12.96 17.97 13.92 17.69 14.75 17.14L17.6 20H6V4ZM14.11 15.1C13.55 15.66 12.8 16 12 16C11.2 16 10.45 15.67 9.89 15.1C9.33 14.54 9 13.79 9 13C9 12.19 9.32 11.44 9.89 10.88C10.45 10.31 11.2 10 12 10C12.8 10 13.55 10.31 14.11 10.88C14.67 11.44 15 12.19 15 13C15 13.79 14.68 14.54 14.11 15.1Z" />
    </Svg>
  );
};
