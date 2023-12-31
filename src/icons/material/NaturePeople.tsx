import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NaturePeopleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.5 10.9999C4.89782 10.9999 5.27936 10.8419 5.56066 10.5606C5.84196 10.2793 6 9.89775 6 9.49992C6 9.1021 5.84196 8.72057 5.56066 8.43926C5.27936 8.15796 4.89782 7.99992 4.5 7.99992C4.10218 7.99992 3.72064 8.15796 3.43934 8.43926C3.15804 8.72057 3 9.1021 3 9.49992C3 9.89775 3.15804 10.2793 3.43934 10.5606C3.72064 10.8419 4.10218 10.9999 4.5 10.9999ZM22.17 9.16992C22.17 5.29992 19.04 2.16992 15.17 2.16992C13.3135 2.16992 11.533 2.90742 10.2203 4.22017C8.9075 5.53293 8.17 7.31341 8.17 9.16992C8.17 12.6399 10.69 15.4999 14 16.0599V19.9999H6V16.9999H7V12.9999C7 12.7347 6.89464 12.4804 6.70711 12.2928C6.51957 12.1053 6.26522 11.9999 6 11.9999H3C2.73478 11.9999 2.48043 12.1053 2.29289 12.2928C2.10536 12.4804 2 12.7347 2 12.9999V16.9999H3V21.9999H19V19.9999H16V16.1199C19.47 15.7099 22.17 12.7599 22.17 9.16992Z" />
    </Svg>
  );
};
