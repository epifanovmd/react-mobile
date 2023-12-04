import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbMultipleOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L16.7401 18.6305C16.5501 18.8505 16.2901 19.0005 16.0001 19.0005H12.0001C11.4201 19.0005 11.0001 18.5505 11.0001 18.0005V16.0005C9.37011 14.8005 8.71011 12.8205 9.10011 11.0005L7.50011 9.39047C7.17011 10.2005 6.97011 11.0805 7.00011 12.0005C6.97011 12.6805 7.07011 13.3505 7.28011 14.0005H7.00011C6.42011 14.0005 6.00011 13.5505 6.00011 13.0005V11.0005C5.30011 10.5005 4.77011 9.81047 4.43011 9.04047C4.00011 8.05047 3.91011 7.00047 4.12011 6.00047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM13.5801 5.00047C12.4601 2.47047 9.50011 1.33047 7.00011 2.45047C6.68011 2.58047 6.39011 2.75047 6.13011 2.93047L9.67011 6.47047C10.7601 5.63047 12.1001 5.08047 13.5801 5.00047ZM18.0601 14.8605C19.6001 12.6605 19.1401 9.62047 17.0001 8.00047C15.2001 6.67047 12.8401 6.72047 11.1201 7.92047L18.0601 14.8605ZM12.0001 21.0005C12.0001 21.5505 12.4201 22.0005 13.0001 22.0005H15.0001C15.5301 22.0005 16.0001 21.5505 16.0001 21.0005V20.0005H12.0001V21.0005ZM7.00011 15.0005V16.0005C7.00011 16.5505 7.42011 17.0005 8.00011 17.0005H9.00011V16.8805C8.43011 16.3305 8.00011 15.7005 7.66011 15.0005H7.00011Z" />
    </Svg>
  );
};
