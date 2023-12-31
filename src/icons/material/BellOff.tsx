import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.73L18.1101 20H3.00011V19L5.00011 17V11C5.00011 9.85998 5.29011 8.72998 5.83011 7.71998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM19.0001 15.8V11C19.0001 7.89998 16.9701 5.16998 14.0001 4.28998C14.0001 4.18998 14.0001 4.09998 14.0001 3.99998C14.0001 3.46955 13.7894 2.96084 13.4143 2.58577C13.0392 2.21069 12.5305 1.99998 12.0001 1.99998C11.4697 1.99998 10.961 2.21069 10.5859 2.58577C10.2108 2.96084 10.0001 3.46955 10.0001 3.99998C10.0001 4.09998 10.0001 4.18998 10.0001 4.28998C9.39011 4.46998 8.80011 4.73998 8.26011 5.08998L19.0001 15.8ZM12.0001 23C12.5305 23 13.0392 22.7893 13.4143 22.4142C13.7894 22.0391 14.0001 21.5304 14.0001 21H10.0001C10.0001 21.5304 10.2108 22.0391 10.5859 22.4142C10.961 22.7893 11.4697 23 12.0001 23Z" />
    </Svg>
  );
};
