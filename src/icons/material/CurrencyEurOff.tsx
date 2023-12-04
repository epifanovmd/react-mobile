import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyEurOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L6.69011 8.58047C6.63011 8.72047 6.55011 8.85047 6.50011 9.00047H2.00011L3.00011 11.0005H6.03011C6.00011 11.2005 6.00011 11.5305 6.00011 12.0005C6.00011 12.4705 6.00011 12.8005 6.03011 13.0005H2.00011L3.00011 15.0005H6.50011C7.13011 16.7505 8.21011 18.1905 9.76011 19.3105C11.3101 20.4305 13.0501 21.0005 15.0001 21.0005C15.9201 21.0005 17.0001 20.7705 18.1701 20.3205C18.2401 20.3005 18.2901 20.2705 18.3501 20.2405L20.8401 22.7305L22.1101 21.4605ZM8.56011 13.0005C8.50011 12.5505 8.47011 12.2205 8.47011 12.0005C8.47011 11.7805 8.50011 11.4505 8.56011 11.0005H9.13011L11.1001 13.0005H8.56011ZM15.0001 18.5005C13.8901 18.5005 12.7801 18.1705 11.6601 17.5005C10.5401 16.8305 9.72011 15.9705 9.22011 15.0005H13.1101L16.4501 18.3405C16.0001 18.4505 15.5001 18.5005 15.0001 18.5005ZM15.0001 9.00047L15.9701 11.0005H14.2201L12.2001 9.00047H15.0001ZM10.5501 7.35047L8.74011 5.54047C9.06011 5.24047 9.39011 4.95047 9.76011 4.69047C11.3101 3.56047 13.0501 3.00047 15.0001 3.00047C17.3001 3.00047 19.3001 3.77047 21.0001 5.30047L19.2001 7.08047C18.0001 6.00047 16.5801 5.50047 15.0001 5.50047C13.8901 5.50047 12.7801 5.83047 11.6601 6.50047C11.2401 6.77047 10.8801 7.05047 10.5501 7.35047Z" />
    </Svg>
  );
};
