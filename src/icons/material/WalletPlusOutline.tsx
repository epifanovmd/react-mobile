import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WalletPlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 0V3H0V5H3V8H5V5H8V3H5V0H3ZM10 3V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5V10H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28V5C21 3.9 20.1 3 19 3H10ZM13 9H20V15H13V9ZM16 10.5C15.6022 10.5 15.2206 10.658 14.9393 10.9393C14.658 11.2206 14.5 11.6022 14.5 12C14.5 12.3978 14.658 12.7794 14.9393 13.0607C15.2206 13.342 15.6022 13.5 16 13.5C16.3978 13.5 16.7794 13.342 17.0607 13.0607C17.342 12.7794 17.5 12.3978 17.5 12C17.5 11.6022 17.342 11.2206 17.0607 10.9393C16.7794 10.658 16.3978 10.5 16 10.5Z" />
    </Svg>
  );
};
