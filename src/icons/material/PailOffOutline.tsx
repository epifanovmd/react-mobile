import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PailOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L17.3501 19.2405L17.0001 21.0005H7.00011L5.90011 15.5005L7.73011 14.4305L8.64011 19.0005H15.3601L15.6501 17.5405L9.31011 11.2005L4.27011 14.1105C3.79011 14.3905 3.18011 14.2305 2.90011 13.7505C2.62011 13.2705 2.79011 12.6605 3.27011 12.3805L7.85011 9.74047L6.38011 8.27047L4.65011 9.27047L4.00011 6.00047H3.00011V4.89047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM17.9601 6.00047L16.5001 13.3005L18.2001 15.0005L20.0001 6.00047H21.0001V4.00047H7.20011L9.20011 6.00047H17.9601ZM11.5001 7.63047L11.0801 7.88047L12.5301 9.33047C12.9701 9.05047 13.1301 8.46047 12.8601 8.00047C12.5801 7.50047 11.9701 7.35047 11.5001 7.63047Z" />
    </Svg>
  );
};
