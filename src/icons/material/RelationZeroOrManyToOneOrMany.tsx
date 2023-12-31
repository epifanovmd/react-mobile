import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RelationZeroOrManyToOneOrManyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 13L19 15V13H17V15H13V7H9.79C9.59507 6.55492 9.27466 6.17629 8.86796 5.91042C8.46126 5.64454 7.9859 5.50295 7.5 5.50295C7.0141 5.50295 6.53874 5.64454 6.13204 5.91042C5.72534 6.17629 5.40493 6.55492 5.21 7H5L3 5H2V11H3L5 9H5.21C5.40493 9.44508 5.72534 9.82371 6.13204 10.0896C6.53874 10.3555 7.0141 10.4971 7.5 10.4971C7.9859 10.4971 8.46126 10.3555 8.86796 10.0896C9.27466 9.82371 9.59507 9.44508 9.79 9H11V17H17V19H19V17L21 19H22V13H21ZM7.5 9C7.30222 9 7.10888 8.94135 6.94443 8.83147C6.77998 8.72159 6.65181 8.56541 6.57612 8.38268C6.50043 8.19996 6.48063 7.99889 6.51921 7.80491C6.5578 7.61093 6.65304 7.43275 6.79289 7.29289C6.93275 7.15304 7.11093 7.0578 7.30491 7.01921C7.49889 6.98063 7.69996 7.00043 7.88268 7.07612C8.06541 7.15181 8.22159 7.27998 8.33147 7.44443C8.44135 7.60888 8.5 7.80222 8.5 8C8.5 8.26522 8.39464 8.51957 8.20711 8.70711C8.01957 8.89464 7.76522 9 7.5 9Z" />
    </Svg>
  );
};
