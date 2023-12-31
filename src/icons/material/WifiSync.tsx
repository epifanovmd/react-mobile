import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiSyncIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 6C8.61995 6 5.49995 7.12 2.99995 9L1.19995 6.6C4.20995 4.34 7.94995 3 12 3C16.05 3 19.7899 4.34 22.7999 6.6L21 9C18.5 7.12 15.38 6 12 6ZM12 15C10.65 15 9.39995 15.45 8.39995 16.2L12 21L13.26 19.32C13.1 18.74 13 18.13 13 17.5C13 16.69 13.16 15.91 13.43 15.19C12.97 15.08 12.5 15 12 15ZM15.23 12.61C16.19 11.77 17.38 11.22 18.7 11.05C16.78 9.76 14.5 9 12 9C9.29995 9 6.80995 9.89 4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C13.14 12 14.23 12.22 15.23 12.61ZM19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20ZM19 13.5V12L16.75 14.25L19 16.5V15C20.3799 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.2099 13.5 19 13.5Z" />
    </Svg>
  );
};
