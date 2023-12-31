import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.39011 1.73047L1.11011 3.00047L9.00011 10.8905V15.8705C8.96011 16.1605 9.06011 16.4705 9.29011 16.7005L13.3001 20.7105C13.6901 21.1005 14.3201 21.1005 14.7101 20.7105C14.9401 20.5005 15.0401 20.1805 15.0001 19.8805V16.8905L20.8401 22.7305L22.1101 21.4605L15.0001 14.3505V14.3405L13.0001 12.3505L11.0001 10.3405L4.15011 3.50047L2.39011 1.73047ZM6.21011 3.00047L8.20011 5.00047H16.9601L13.1101 9.91047L15.0001 11.8005V10.7505L19.7901 4.62047C20.1301 4.19047 20.0501 3.56047 19.6201 3.22047C19.4301 3.08047 19.2201 3.00047 19.0001 3.00047H6.21011ZM11.0001 12.8905L13.0001 14.8905V17.5805L11.0001 15.5805V12.8905Z" />
    </Svg>
  );
};
