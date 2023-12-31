import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireworkOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L13.1701 15.0605L8.72011 19.5005L7.29011 18.0905C7.04011 18.1605 6.80011 18.2805 6.63011 18.5005C6.57011 18.5705 6.50011 18.6505 6.50011 18.7405C6.42011 18.8805 6.38011 19.0005 6.32011 19.1505C6.21011 19.4205 6.09011 19.6905 5.93011 19.9305C5.81011 20.1005 5.68011 20.2605 5.53011 20.3905C5.42011 20.5005 5.29011 20.5905 5.16011 20.6605C5.08011 20.7105 5.00011 20.7605 4.90011 20.7905C4.30011 21.0405 3.63011 21.0005 3.00011 21.0005V19.0005H3.90011C4.00011 19.0005 4.08011 19.0005 4.16011 18.9405L4.21011 18.8905C4.28011 18.8105 4.34011 18.7005 4.39011 18.6005C4.47011 18.4205 4.53011 18.2405 4.60011 18.0605L4.64011 17.9605C4.76011 17.6905 4.90011 17.4505 5.08011 17.2305C5.18011 17.1005 5.30011 17.0005 5.42011 16.8705C5.54011 16.7705 5.66011 16.6705 5.80011 16.5905L4.50011 15.2805L8.94011 10.8305L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM21.0001 3.00047L12.8101 4.12047L19.8801 11.1905L21.0001 3.00047ZM16.5001 11.7405L12.2601 7.50047L11.5001 8.28047L15.7201 12.5005L16.5001 11.7405Z" />
    </Svg>
  );
};
