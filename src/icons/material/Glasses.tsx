import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GlassesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.00009 10C2.76009 10 2.55009 10.09 2.41009 10.25C2.27009 10.4 2.21009 10.62 2.24009 10.86L2.74009 13.85C2.82009 14.5 3.40009 15 4.00009 15H7.00009C7.64009 15 8.36009 14.44 8.50009 13.82L9.56009 10.63C9.60009 10.5 9.57009 10.31 9.50009 10.19C9.39009 10.07 9.22009 10 9.00009 10H3.00009ZM7.00009 17H4.00009C2.38009 17 0.960093 15.74 0.760094 14.14L0.260094 11.15C0.150094 10.3 0.390094 9.5 0.910094 8.92C1.43009 8.34 2.19009 8 3.00009 8H9.00009C9.83009 8 10.5801 8.35 11.0601 8.96C11.1701 9.11 11.2701 9.27 11.3501 9.45C11.7801 9.36 12.2201 9.36 12.6401 9.45C12.7201 9.27 12.8201 9.11 12.9401 8.96C13.4101 8.35 14.1601 8 15.0001 8H21.0001C21.8101 8 22.5701 8.34 23.0901 8.92C23.6001 9.5 23.8401 10.3 23.7401 11.11L23.2301 14.18C23.0401 15.74 21.6101 17 20.0001 17H17.0001C15.4401 17 13.9201 15.81 13.5401 14.3L12.6401 11.59C12.2601 11.31 11.7301 11.31 11.3501 11.59L10.4301 14.37C10.0701 15.82 8.56009 17 7.00009 17ZM15.0001 10C14.7801 10 14.6101 10.07 14.5001 10.19C14.4201 10.31 14.4001 10.5 14.4501 10.7L15.4601 13.75C15.6401 14.44 16.3601 15 17.0001 15H20.0001C20.5901 15 21.1801 14.5 21.2501 13.89L21.7601 10.82C21.7901 10.62 21.7301 10.4 21.5901 10.25C21.4501 10.09 21.2401 10 21.0001 10H15.0001Z" />
    </Svg>
  );
};
