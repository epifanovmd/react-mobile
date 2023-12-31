import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GhostOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.28999 5.09047L6.83999 3.64047C8.29999 2.61047 10.08 2.00047 12 2.00047C16.97 2.00047 21 6.03047 21 11.0005V17.8005L19 15.8005V11.0005C19 7.14047 15.86 4.00047 12 4.00047C10.63 4.00047 9.35999 4.40047 8.28999 5.09047ZM22.11 21.4605L20.84 22.7305L17.56 19.4505L15 22.0005L12 19.0005L8.99999 22.0005L5.99999 19.0005L2.99999 22.0005V11.0005C2.99999 9.26047 3.49999 7.63047 4.35999 6.25047L1.10999 3.00047L2.38999 1.73047L6.88999 6.23047L8.68998 8.03047L10.97 10.3105L17.41 16.7605H17.42L21 20.3405V20.3505L22.11 21.4605ZM16.14 18.0305L9.88999 11.7805C9.61999 11.9205 9.31999 12.0005 8.99999 12.0005C7.89999 12.0005 6.99999 11.1105 6.99999 10.0005C6.99999 9.68047 7.07999 9.38047 7.21999 9.11047L5.81999 7.71047C5.29999 8.69047 4.99999 9.81047 4.99999 11.0005V17.1705L5.99999 16.1705L7.40999 17.5905L8.99999 19.1705L10.59 17.5905L12 16.1705L13.41 17.5905L15 19.1705L16.14 18.0305ZM15 8.00047C13.96 8.00047 13.11 8.80047 13 9.82047L15.18 12.0005C16.2 11.8905 17 11.0405 17 10.0005C17 8.90047 16.11 8.00047 15 8.00047Z" />
    </Svg>
  );
};
