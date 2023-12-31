import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TunnelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C6.5 2 2 6.5 2 12V22H22V12C22 6.5 17.5 2 12 2ZM7.1 5.69C8.21 4.83 9.54 4.25 11 4.07V6.09C10.09 6.24 9.25 6.6 8.53 7.11L7.1 5.69ZM15.47 7.11C14.75 6.6 13.91 6.24 13 6.09V4.07C14.46 4.25 15.79 4.83 16.9 5.69L15.47 7.11ZM5.69 7.1L7.11 8.53C6.6 9.25 6.24 10.09 6.09 11H4.07C4.25 9.54 4.83 8.21 5.69 7.1ZM6 13V15.5H4V13H6ZM4 20V17.5H6V20H4ZM16.89 8.53L18.31 7.1C19.17 8.21 19.75 9.54 19.93 11H17.91C17.76 10.09 17.4 9.25 16.89 8.53ZM18 13H20V15.5H18V13ZM18 20V17.5H20V20H18Z" />
    </Svg>
  );
};
