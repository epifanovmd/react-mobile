import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseAllIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5001 3.09009L20.9101 4.50009L16.4101 9.00009H20.0001V11.0001H13.0001V4.00009H15.0001V7.59009L19.5001 3.09009ZM20.9101 19.5001L19.5001 20.9101L15.0001 16.4101V20.0001H13.0001V13.0001H20.0001V15.0001H16.4101L20.9101 19.5001ZM4.50009 3.09009L9.00009 7.59009V4.00009H11.0001V11.0001H4.00009V9.00009H7.59009L3.09009 4.50009L4.50009 3.09009ZM3.09009 19.5001L7.59009 15.0001H4.00009V13.0001H11.0001V20.0001H9.00009V16.4101L4.50009 20.9101L3.09009 19.5001Z" />
    </Svg>
  );
};
