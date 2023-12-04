import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MotherHeartIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 2C13.6601 2 15.0001 3.34 15.0001 5C15.0001 6.66 13.6601 8 12.0001 8C10.3401 8 9.00007 6.66 9.00007 5C9.00007 3.34 10.3401 2 12.0001 2ZM20.0001 18L18.0001 12.56C17.6501 11.57 17.3401 10.71 16.0001 10C14.6301 9.3 13.6301 9 12.0001 9C10.3901 9 9.39007 9.3 8.00007 10C6.68007 10.71 6.37007 11.57 6.00007 12.56L4.00007 18C3.77007 19.13 6.38007 20.44 8.13007 21.19C9.34007 21.72 10.6401 22 12.0001 22C13.3801 22 14.6701 21.72 15.8901 21.19C17.6401 20.44 20.2501 19.13 20.0001 18ZM15.4201 17.5L12.0001 21L8.58007 17.5C8.22007 17.12 8.00007 16.61 8.00007 16.05C8.00007 14.92 8.90007 14 10.0001 14C10.5501 14 11.0601 14.23 11.4201 14.61L12.0001 15.2L12.5801 14.6C12.9401 14.23 13.4501 14 14.0001 14C15.1101 14 16.0001 14.92 16.0001 16.05C16.0001 16.61 15.7801 17.13 15.4201 17.5Z" />
    </Svg>
  );
};
