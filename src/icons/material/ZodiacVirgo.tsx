import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacVirgoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 19.13C20 17.77 20 15.18 20 14C20 12.9391 19.5786 11.9217 18.8284 11.1716C18.0783 10.4214 17.0609 10 16 10C15.3 10 14.6 10.2 14 10.56V6C14 5.20435 13.6839 4.44129 13.1213 3.87868C12.5587 3.31607 11.7956 3 11 3C10.25 3 9.55 3.29 9 3.78C7.86 2.76 6.14 2.76 5 3.78C4.45 3.28 3.74 3 3 3V5C3.26522 5 3.51957 5.10536 3.70711 5.29289C3.89464 5.48043 4 5.73478 4 6V16H6V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5C7.26522 5 7.51957 5.10536 7.70711 5.29289C7.89464 5.48043 8 5.73478 8 6V16H10V6C10 5.73478 10.1054 5.48043 10.2929 5.29289C10.4804 5.10536 10.7348 5 11 5C11.2652 5 11.5196 5.10536 11.7071 5.29289C11.8946 5.48043 12 5.73478 12 6V14C12 15.18 12 17.77 13.5 19.13C12.72 19.54 11.88 19.84 11 20V22C12.29 22 14.84 20.74 16 20.13C17.16 20.74 19.71 22 21 22V20C20.12 19.84 19.28 19.54 18.5 19.13ZM16 12C16.5304 12 17.0391 12.2107 17.4142 12.5858C17.7893 12.9609 18 13.4696 18 14C18 16.92 17.46 18 16 18C14.54 18 14 16.92 14 14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12Z" />
    </Svg>
  );
};
