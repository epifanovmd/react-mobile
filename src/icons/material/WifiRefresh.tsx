import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiRefreshIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 12C9.96995 12 8.09995 12.67 6.59995 13.8L4.79995 11.4C6.80995 9.89 9.29995 9 12 9C14.7 9 17.19 9.89 19.2 11.4L18.74 12C18.66 12 18.58 12 18.5 12C17.43 12 16.42 12.26 15.53 12.72C14.45 12.26 13.26 12 12 12ZM21 9L22.7999 6.6C19.7899 4.34 16.05 3 12 3C7.94995 3 4.20995 4.34 1.19995 6.6L2.99995 9C5.49995 7.12 8.61995 6 12 6C15.38 6 18.5 7.12 21 9ZM12 15C10.65 15 9.39995 15.45 8.39995 16.2L12 21L12.34 20.54C12.13 19.9 12 19.22 12 18.5C12 17.24 12.36 16.08 13 15.08C12.66 15.03 12.33 15 12 15ZM18 14.5C15.79 14.5 14 16.29 14 18.5C14 20.71 15.79 22.5 18 22.5C19.68 22.5 21.1199 21.47 21.7099 20H20C19.54 20.61 18.82 21 18 21C16.62 21 15.5 19.88 15.5 18.5C15.5 17.12 16.62 16 18 16C18.69 16 19.32 16.28 19.77 16.73L18 18.5H22V14.5L20.83 15.67C20.11 14.95 19.11 14.5 18 14.5Z" />
    </Svg>
  );
};
