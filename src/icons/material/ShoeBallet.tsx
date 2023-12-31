import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShoeBalletIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.78 11.97C12.27 8.54 10.86 2 7.52998 2C4.19998 2 2.79998 8.54 2.27998 11.97C2.06998 13.42 1.99998 14.89 2.15998 16.35C2.49998 19.39 3.54998 20.84 4.26998 21.5C4.63998 21.83 5.10998 22 5.59998 22H9.46998C9.95998 22 10.43 21.83 10.8 21.5C11.5 20.84 12.55 19.39 12.91 16.35C13.08 14.89 13 13.42 12.78 11.97ZM7.52998 4C7.88998 3.87 8.58998 4.73 9.26998 6.31L4.57998 10.33C5.40998 6.26 6.93998 3.79 7.52998 4ZM9.74998 13H5.30998C5.09998 13 4.91998 12.92 4.75998 12.81L9.99998 8.33C10.29 9.35 10.56 10.5 10.75 11.83C10.84 12.44 10.37 13 9.74998 13ZM21.78 11.97C21.27 8.54 19.86 2 16.53 2C15.04 2 13.94 3.32 13.13 5.08C13.5 6.04 13.84 7.14 14.13 8.37L19.31 12.81C19.15 12.92 18.97 13 18.75 13H14.92C15.04 14.27 15.03 15.45 14.89 16.59C14.62 18.87 14 20.45 13.32 21.53C13.68 21.84 14.13 22 14.6 22H18.47C18.96 22 19.43 21.83 19.8 21.5C20.5 20.84 21.55 19.39 21.91 16.35C22.08 14.89 22 13.42 21.78 11.97ZM14.8 6.31C15.5 4.73 16.18 3.87 16.53 4C17.13 3.79 18.65 6.26 19.5 10.33L14.8 6.31Z" />
    </Svg>
  );
};
