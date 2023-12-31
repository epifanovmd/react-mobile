import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacScorpioIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.71 15.29L16.29 16.71L17.59 18H16C15.4696 18 14.9609 17.7893 14.5858 17.4142C14.2107 17.0391 14 16.5304 14 16V6C14 5.20435 13.6839 4.44129 13.1213 3.87868C12.5587 3.31607 11.7956 3 11 3C10.25 3 9.55 3.29 9 3.78C7.86 2.76 6.14 2.76 5 3.78C4.45 3.28 3.74 3 3 3V5C3.26522 5 3.51957 5.10536 3.70711 5.29289C3.89464 5.48043 4 5.73478 4 6V16H6V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5C7.26522 5 7.51957 5.10536 7.70711 5.29289C7.89464 5.48043 8 5.73478 8 6V16H10V6C10 5.73478 10.1054 5.48043 10.2929 5.29289C10.4804 5.10536 10.7348 5 11 5C11.2652 5 11.5196 5.10536 11.7071 5.29289C11.8946 5.48043 12 5.73478 12 6V16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20H17.59L16.29 21.29L17.71 22.71L21.41 19L17.71 15.29Z" />
    </Svg>
  );
};
