import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 6C8.61995 6 5.49995 7.12 2.99995 9L1.19995 6.6C4.20995 4.34 7.94995 3 12 3C16.05 3 19.7899 4.34 22.7999 6.6L21 9C18.5 7.12 15.38 6 12 6ZM12 15C10.65 15 9.39995 15.45 8.39995 16.2L12 21L13.04 19.61C13 19.41 13 19.21 13 19C13 17.66 13.44 16.43 14.19 15.43C13.5 15.16 12.77 15 12 15ZM16.84 13.41C17.18 13.27 17.5499 13.17 17.92 13.1L19.2 11.4C17.19 9.89 14.7 9 12 9C9.29995 9 6.80995 9.89 4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C13.78 12 15.44 12.5 16.84 13.41ZM20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" />
    </Svg>
  );
};
