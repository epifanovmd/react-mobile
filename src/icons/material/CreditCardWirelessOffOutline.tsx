import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardWirelessOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C9.85 2 7.7 2.69 5.9 4.08L7.32 5.5C10.45 3.24 14.84 3.5 17.66 6.33L19.07 4.92C17.12 2.96 14.56 2 12 2ZM3.28 4L2 5.27L7.73 11H6C4.89 11 4 11.9 4 13V21C4 22.11 4.89 23 6 23H18C18.47 23 18.92 22.84 19.27 22.54L19.73 23L21 21.72L3.28 4ZM12 6C10.87 6 9.75 6.31 8.77 6.94L10.24 8.41C11.73 7.68 13.58 7.92 14.83 9.16L16.24 7.75C15.07 6.58 13.54 6 12 6ZM12.82 11L14.82 13H18V15H16.82L20 18.18V13C20 11.9 19.11 11 18 11H12.82ZM6 13H9.73L11.73 15H6V13ZM6 17H13.73L17.73 21H6V17Z" />
    </Svg>
  );
};
