import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TumbleDryerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L4.00011 5.89047V20.0005C4.00011 21.1105 4.89011 22.0005 6.00011 22.0005H18.0001C18.5801 22.0005 19.1001 21.7505 19.4601 21.3505L20.8401 22.7305L22.1101 21.4605ZM12.0001 20.0005C8.69011 20.0005 6.00011 17.3105 6.00011 14.0005C6.00011 12.3205 6.70011 10.8005 7.82011 9.71047L8.61011 10.5005H8.11011C7.85011 12.2905 8.32011 13.6405 9.42011 14.7105C10.0001 15.3305 10.2401 16.1205 10.0001 17.5005H11.8901C12.1601 15.7105 11.6801 14.3605 10.5801 13.2905C10.2201 12.9105 10.0001 12.4405 9.95011 11.8405L14.0301 15.9205C14.1101 16.3505 14.1101 16.8605 14.0001 17.5005H15.6101L16.2901 18.1805C15.2001 19.3005 13.6901 20.0005 12.0001 20.0005ZM11.2501 8.05047C11.5001 8.00047 11.7501 8.00047 12.0001 8.00047C15.3101 8.00047 18.0001 10.6905 18.0001 14.0005C18.0001 14.2505 18.0001 14.5005 17.9501 14.7505L20.0001 16.8005V4.00047C20.0001 2.90047 19.1101 2.00047 18.0001 2.00047H6.00011C5.76011 2.00047 5.54011 2.05047 5.33011 2.13047L11.2501 8.05047ZM10.0001 4.00047C10.5501 4.00047 11.0001 4.45047 11.0001 5.00047C11.0001 5.55047 10.5501 6.00047 10.0001 6.00047C9.45011 6.00047 9.00011 5.55047 9.00011 5.00047C9.00011 4.45047 9.45011 4.00047 10.0001 4.00047Z" />
    </Svg>
  );
};
