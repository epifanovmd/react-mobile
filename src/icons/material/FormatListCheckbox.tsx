import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatListCheckboxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 19V17H8V19H21ZM21 13V11H8V13H21ZM8 7H21V5H8V7ZM4 5V7H6V5H4ZM3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H6C6.26522 4 6.51957 4.10536 6.70711 4.29289C6.89464 4.48043 7 4.73478 7 5V7C7 7.26522 6.89464 7.51957 6.70711 7.70711C6.51957 7.89464 6.26522 8 6 8H4C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7V5ZM4 11V13H6V11H4ZM3 11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H6C6.26522 10 6.51957 10.1054 6.70711 10.2929C6.89464 10.4804 7 10.7348 7 11V13C7 13.2652 6.89464 13.5196 6.70711 13.7071C6.51957 13.8946 6.26522 14 6 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V11ZM4 17V19H6V17H4ZM3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H6C6.26522 16 6.51957 16.1054 6.70711 16.2929C6.89464 16.4804 7 16.7348 7 17V19C7 19.2652 6.89464 19.5196 6.70711 19.7071C6.51957 19.8946 6.26522 20 6 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V17Z" />
    </Svg>
  );
};
