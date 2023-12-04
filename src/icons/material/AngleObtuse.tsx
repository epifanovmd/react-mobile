import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AngleObtuseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.9999 19H9.30995L4.06995 5.36001L5.92995 4.64001L8.95995 12.5C9.49995 12.29 10.0899 12.17 10.7099 12.17C13.3799 12.17 15.5599 14.34 15.5799 17H20.9999V19ZM10.6899 17H13.5799C13.5599 15.42 12.2999 14.17 10.7099 14.17C10.3399 14.17 9.99995 14.24 9.66995 14.36L10.6899 17Z" />
    </Svg>
  );
};
