import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.19 2.25C11.97 2.26 12.71 2.73 13 3.5L18 15.45C18.09 15.71 18.14 16 18.13 16.25C18.11 17 17.65 17.74 16.9 18.05L9.53001 21.1C9.27001 21.22 9.00001 21.25 8.74001 21.25C7.97001 21.23 7.24001 20.77 6.93001 20L1.97001 8.05C1.55001 7.04 2.04001 5.87 3.06001 5.45L10.42 2.4C10.67 2.31 10.93 2.25 11.19 2.25ZM14.67 2.25H16.12C16.6504 2.25 17.1592 2.46071 17.5342 2.83579C17.9093 3.21086 18.12 3.71957 18.12 4.25V10.6L14.67 2.25ZM20.13 3.79L21.47 4.36C22.5 4.78 22.97 5.94 22.56 6.96L20.13 12.82V3.79ZM11.19 4.22L3.80001 7.29L8.77001 19.3L16.17 16.24L11.19 4.22ZM8.65001 8.54L11.88 10.95L11.44 14.96L8.21001 12.54L8.65001 8.54Z" />
    </Svg>
  );
};
