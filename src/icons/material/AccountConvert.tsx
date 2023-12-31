import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountConvertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 0L11.34 0.03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.4501 11H23.9501C23.4401 4.84 18.29 0 12 0ZM12 4C10.07 4 8.50005 5.57 8.50005 7.5C8.50005 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4ZM0.0500488 13C0.560049 19.16 5.71005 24 12 24L12.66 23.97L8.85005 20.16L7.50005 21.5C4.25005 19.94 1.91005 16.76 1.55005 13H0.0500488ZM12 13C8.13005 13 5.00005 14.57 5.00005 16.5V18H19V16.5C19 14.57 15.87 13 12 13Z" />
    </Svg>
  );
};
