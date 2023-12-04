import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AngleAcuteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 19.0001H4.08997L14.18 4.43005L15.82 5.57005L11.28 12.1301C12.89 12.9601 14 14.6201 14 16.5401C14 16.7001 14 16.8501 13.97 17.0001H20V19.0001ZM7.90997 17.0001H11.96C12 16.8501 12 16.7001 12 16.5401C12 15.2801 11.24 14.2201 10.14 13.7801L7.90997 17.0001Z" />
    </Svg>
  );
};
