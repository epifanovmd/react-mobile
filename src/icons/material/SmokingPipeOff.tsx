import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokingPipeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L19.7101 21.6005C19.1901 21.8505 18.6201 22.0005 18.0001 22.0005H16.0001C13.0001 22.0005 11.7201 21.5005 8.89011 18.6505L5.12011 14.8805C4.56011 14.3205 3.80011 14.0005 3.00011 14.0005H2.00011V12.0005H3.00011C4.33011 12.0005 5.60011 12.5305 6.53011 13.4705L10.3001 17.2305C11.0001 17.9205 12.0001 18.0005 13.0001 18.0005H14.0001V15.8905L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM21.9301 18.7305C21.9701 18.5005 22.0001 18.2505 22.0001 18.0005V15.0005C22.0001 13.8905 21.1101 13.0005 20.0001 13.0005H16.2001L21.9301 18.7305ZM18.5001 9.70047V9.77047V12.0005H20.0001V9.76047C20.0001 7.62047 18.7801 5.66047 16.8501 4.73047H16.8201C17.5801 4.00047 17.9001 3.00047 17.8001 2.00047H16.3201C16.3401 2.11047 16.3501 2.23047 16.3501 2.35047C16.3501 3.37047 15.5001 4.20047 14.5001 4.20047V5.70047C16.7101 5.70047 18.5001 7.50047 18.5001 9.70047ZM11.8301 8.63047C12.0501 8.68047 12.2701 8.70047 12.5001 8.70047H14.0001C15.0701 8.66047 15.9601 9.50047 16.0001 10.5605C16.0001 10.6105 16.0001 10.6505 16.0001 10.7005V12.0005H17.5001V10.3605C17.4201 8.53047 15.8801 7.12047 14.0501 7.20047H14.0001H12.5001C11.4501 7.12047 10.6501 6.25047 10.6501 5.20047C10.6701 4.22047 11.5001 3.43047 12.4601 3.45047H12.5001V2.00047C10.6501 2.00047 9.15011 3.50047 9.15011 5.35047C9.15011 5.58047 9.17011 5.80047 9.22011 6.00047L11.8301 8.63047Z" />
    </Svg>
  );
};
