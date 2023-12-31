import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountMultipleRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M24.0001 17V19H21.0001V17C21.0001 15.45 20.3001 14.06 19.1801 13.06C24.0001 13.55 24.0001 17 24.0001 17ZM18.0001 5C19.6601 5 21.0001 6.34 21.0001 8C21.0001 9.66 19.6601 11 18.0001 11C17.6901 11 17.3801 10.95 17.1001 10.86C17.6701 10.05 18.0001 9.07 18.0001 8C18.0001 6.94 17.6701 5.95 17.1001 5.14C17.3801 5.05 17.6901 5 18.0001 5ZM13.0001 5C14.6601 5 16.0001 6.34 16.0001 8C16.0001 9.66 14.6601 11 13.0001 11C11.3401 11 10.0001 9.66 10.0001 8C10.0001 6.34 11.3401 5 13.0001 5ZM19.0001 17V19H7.00011V17C7.00011 14.79 9.69011 13 13.0001 13C16.3101 13 19.0001 14.79 19.0001 17ZM0.464111 13.12L2.59011 11L0.464111 8.88L1.88011 7.46L4.00011 9.59L6.12011 7.46L7.54011 8.88L5.41011 11L7.54011 13.12L6.12011 14.54L4.00011 12.41L1.88011 14.54L0.464111 13.12Z" />
    </Svg>
  );
};
