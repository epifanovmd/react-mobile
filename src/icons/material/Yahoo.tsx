import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const YahooIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5 7.59078L8.16 13.2008L5.85 7.59078H2L6.29 17.2308L4.75 20.7008H8.5L14.24 7.59078H10.5ZM15 12.7308C13.63 12.7308 12.59 13.7708 12.59 15.0008C12.59 16.1708 13.59 17.1608 14.93 17.1608C16.32 17.1608 17.36 16.1308 17.36 14.9008C17.36 13.6908 16.36 12.7308 15 12.7308ZM17.72 3.30078L13.89 11.8908H18.17L22 3.30078H17.72Z" />
    </Svg>
  );
};
