import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RobotOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 15.0005V18.0005C23 18.5005 22.64 18.8805 22.17 18.9705L18.97 15.7705C19 15.6805 19 15.5905 19 15.5005C19 14.1205 17.88 13.0005 16.5 13.0005C16.41 13.0005 16.32 13.0005 16.23 13.0305L10.2 7.00047H11V5.73047C10.4 5.39047 10 4.74047 10 4.00047C10 2.90047 10.9 2.00047 12 2.00047C13.1 2.00047 14 2.90047 14 4.00047C14 4.74047 13.6 5.39047 13 5.73047V7.00047H14C17.87 7.00047 21 10.1305 21 14.0005H22C22.55 14.0005 23 14.4505 23 15.0005ZM22.11 21.4605L20.84 22.7305L19.89 21.7805C19.62 21.9205 19.32 22.0005 19 22.0005H5C3.9 22.0005 3 21.1105 3 20.0005V19.0005H2C1.45 19.0005 1 18.5505 1 18.0005V15.0005C1 14.4505 1.45 14.0005 2 14.0005H3C3 11.5305 4.29 9.36047 6.22 8.11047L1.11 3.00047L2.39 1.73047L22.11 21.4605ZM10 15.5005C10 14.1205 8.88 13.0005 7.5 13.0005C6.12 13.0005 5 14.1205 5 15.5005C5 16.8805 6.12 18.0005 7.5 18.0005C8.88 18.0005 10 16.8805 10 15.5005ZM16.07 17.9605L14.04 15.9305C14.23 16.9705 15.04 17.7705 16.07 17.9605Z" />
    </Svg>
  );
};
