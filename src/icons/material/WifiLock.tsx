import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 6C8.61995 6 5.49995 7.12 2.99995 9L1.19995 6.6C4.20995 4.34 7.94995 3 12 3C16.05 3 19.7899 4.34 22.7999 6.6L21 9C18.5 7.12 15.38 6 12 6ZM17.4 10.29C15.7699 9.47 13.94 9 12 9C9.29995 9 6.80995 9.89 4.79995 11.4L6.59995 13.8C8.09995 12.67 9.96995 12 12 12C12.97 12 13.9 12.16 14.78 12.44C15.34 11.45 16.2699 10.68 17.4 10.29ZM8.39995 16.2L12 21L13 19.67V17.2C13 16.5 13.27 15.81 13.7 15.26C13.16 15.1 12.59 15 12 15C10.65 15 9.39995 15.45 8.39995 16.2ZM23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12C20.4 12 21.7999 13.1 21.7999 14.5V16C22.4 16 23 16.6 23 17.3ZM20.5 14.5C20.5 13.7 19.7999 13.2 19 13.2C18.2 13.2 17.5 13.7 17.5 14.5V16H20.5V14.5Z" />
    </Svg>
  );
};
