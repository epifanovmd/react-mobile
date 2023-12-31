import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireHydrantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L8.00011 9.89047V20.0005C6.90011 20.0005 6.00011 20.9005 6.00011 22.0005H18.0001C18.0001 20.9005 17.1101 20.0005 16.0001 20.0005V17.8905L20.8401 22.7305ZM10.2201 12.1105L12.8901 14.7805C12.6201 14.9205 12.3201 15.0005 12.0001 15.0005C10.9001 15.0005 10.0001 14.1105 10.0001 13.0005C10.0001 12.6805 10.0801 12.3805 10.2201 12.1105ZM11.2001 8.00047L8.44011 5.24047C8.94011 4.21047 9.87011 3.43047 11.0001 3.14047V2.00047H13.0001V3.14047C14.4001 3.50047 15.5001 4.60047 15.8601 6.00047H18.0001V8.00047H11.2001ZM19.0001 11.0005V12.0005H20.0001V14.0005H19.0001V15.0005H18.2001L17.0001 13.8005V11.0005H19.0001ZM5.00011 15.0005V14.0005H4.00011V12.0005H5.00011V11.0005H7.00011V15.0005H5.00011ZM16.0001 12.8005L12.2001 9.00047H16.0001V12.8005Z" />
    </Svg>
  );
};
