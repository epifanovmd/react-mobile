import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PianoOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L2.00011 3.89047V20.0005C2.00011 21.1105 2.90011 22.0005 4.00011 22.0005H20.1101L20.8401 22.7305L22.1101 21.4605ZM8.00011 20.0005H4.00011V5.89047L6.80011 8.69047V13.0005C6.80011 13.5605 7.24011 14.0005 7.79011 14.0005H8.00011V20.0005ZM15.0001 20.0005H9.00011V14.0005H9.31011C9.86011 14.0005 10.3001 13.5605 10.3001 13.0005V12.1905L15.0001 16.8905V20.0005ZM16.0001 20.0005V17.8905L18.1101 20.0005H16.0001ZM10.3001 7.10047L5.20011 2.00047H20.0001C21.1101 2.00047 22.0001 2.90047 22.0001 4.00047V18.8005L20.0001 16.8005V4.00047H17.2501V13.0005C17.2501 13.3005 17.1301 13.5505 16.9301 13.7305L13.7501 10.5505V4.00047H10.3001V7.10047Z" />
    </Svg>
  );
};
