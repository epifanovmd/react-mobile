import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.46L2.39011 1.72998L1.11011 2.99998L5.83011 7.71998C5.29011 8.72998 5.00011 9.85998 5.00011 11V17L3.00011 19V20H18.1101L20.8401 22.73L22.1101 21.46ZM7.00011 18V11C7.00011 10.39 7.11011 9.78998 7.34011 9.22998L16.1101 18H7.00011ZM10.0001 21H14.0001C14.0001 21.5304 13.7894 22.0391 13.4143 22.4142C13.0392 22.7893 12.5305 23 12.0001 23C11.4697 23 10.961 22.7893 10.5859 22.4142C10.2108 22.0391 10.0001 21.5304 10.0001 21ZM8.29011 5.08998C8.82011 4.74998 9.40011 4.49998 10.0001 4.28998C10.0001 4.18998 10.0001 4.09998 10.0001 3.99998C10.0001 3.46955 10.2108 2.96084 10.5859 2.58577C10.961 2.21069 11.4697 1.99998 12.0001 1.99998C12.5305 1.99998 13.0392 2.21069 13.4143 2.58577C13.7894 2.96084 14.0001 3.46955 14.0001 3.99998C14.0001 4.09998 14.0001 4.18998 14.0001 4.28998C16.9701 5.16998 19.0001 7.89998 19.0001 11V15.8L17.0001 13.8V11C17.0001 9.6739 16.4733 8.40213 15.5356 7.46445C14.598 6.52676 13.3262 5.99998 12.0001 5.99998C11.2201 5.99998 10.4501 6.19998 9.76011 6.55998L8.29011 5.08998Z" />
    </Svg>
  );
};
