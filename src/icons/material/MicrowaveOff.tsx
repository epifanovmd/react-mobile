import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrowaveOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L3.26011 5.15047C2.50011 5.44047 2.00011 6.16047 2.00011 7.00047V17.0005C2.00011 18.1105 2.90011 19.0005 4.00011 19.0005H17.1101L20.8401 22.7305L22.1101 21.4605ZM4.00011 17.0005V7.00047H5.11011L15.1101 17.0005H4.00011ZM16.0001 7.00047V12.8005L21.5001 18.3105C21.8101 17.9505 22.0001 17.5005 22.0001 17.0005V7.00047C22.0001 5.90047 21.1101 5.00047 20.0001 5.00047H8.20011L10.2001 7.00047H16.0001ZM19.0001 7.00047C19.5501 7.00047 20.0001 7.45047 20.0001 8.00047C20.0001 8.55047 19.5501 9.00047 19.0001 9.00047C18.4501 9.00047 18.0001 8.55047 18.0001 8.00047C18.0001 7.45047 18.4501 7.00047 19.0001 7.00047ZM19.0001 11.0005C19.5501 11.0005 20.0001 11.4505 20.0001 12.0005C20.0001 12.5505 19.5501 13.0005 19.0001 13.0005C18.4501 13.0005 18.0001 12.5505 18.0001 12.0005C18.0001 11.4505 18.4501 11.0005 19.0001 11.0005ZM13.0001 9.80047V9.00047H15.0001V11.8005L13.0001 9.80047Z" />
    </Svg>
  );
};
