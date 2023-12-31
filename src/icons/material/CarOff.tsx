import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5 19.8498L6.40999 5.75977L2.40999 1.75977L1.10999 2.99977L4.56999 6.45977L2.99999 10.9998V18.9998C2.99999 19.265 3.10534 19.5193 3.29288 19.7069C3.48042 19.8944 3.73477 19.9998 3.99999 19.9998H4.99999C5.2652 19.9998 5.51956 19.8944 5.70709 19.7069C5.89463 19.5193 5.99999 19.265 5.99999 18.9998V17.9998H16.11L20.84 22.7298L22.11 21.4598L20.5 19.8498ZM6.49999 14.9998C6.10216 14.9998 5.72063 14.8417 5.43932 14.5604C5.15802 14.2791 4.99999 13.8976 4.99999 13.4998C4.99999 13.1019 5.15802 12.7204 5.43932 12.4391C5.72063 12.1578 6.10216 11.9998 6.49999 11.9998C6.89781 11.9998 7.27934 12.1578 7.56065 12.4391C7.84195 12.7204 7.99999 13.1019 7.99999 13.4998C7.99999 13.8976 7.84195 14.2791 7.56065 14.5604C7.27934 14.8417 6.89781 14.9998 6.49999 14.9998ZM4.99999 9.99977L5.77999 7.66977L8.10998 9.99977H4.99999ZM17.5 5.49977L19 9.99977H13.2L16.12 12.9198C16.5 12.1698 17.37 11.8598 18.12 12.2098C18.87 12.5698 19.18 13.4698 18.83 14.2098C18.68 14.4998 18.43 14.7698 18.12 14.9198L21 17.7998V10.9998L18.92 4.99977C18.71 4.39977 18.14 3.99977 17.5 3.99977H7.19999L8.69999 5.49977H17.5Z" />
    </Svg>
  );
};
