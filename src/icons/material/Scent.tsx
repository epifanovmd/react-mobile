import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.5 5.1008C18.5 6.4008 19 7.6008 19 9.0008C19 10.7008 18.3 12.3008 16.6 14.1008C14.7 16.1008 13 18.3008 13 20.5008C13 20.9008 13.1 21.3008 13.2 21.8008C13.2 21.9008 13.2 22.0008 13.1 22.1008C13 22.2008 12.9 22.1008 12.9 22.0008C11.9 20.7008 11.4 19.5008 11.4 18.1008C11.4 16.4008 12.1 14.8008 13.8 13.0008C15.7 11.0008 17.4 8.8008 17.4 6.6008C17.4 6.2008 17.3 5.8008 17.2 5.3008C17.2 5.2008 17.2 5.1008 17.3 5.0008C17.4 5.0008 17.4 5.0008 17.5 5.1008ZM9.7 2.1008C10.4 3.0008 10.7 4.0008 10.7 4.9008C10.7 6.2008 10.1 7.4008 8.9 8.7008C7.5 10.2008 6.2 11.9008 6.2 13.5008C6.2 13.8008 6.3 14.2008 6.4 14.4008C6.4 14.5008 6.4 14.5008 6.3 14.6008C6.2 14.7008 6.1 14.6008 6.1 14.6008C5.3 13.6008 5 12.6008 5 11.7008C5 10.4008 5.6 9.2008 6.8 7.9008C8.2 6.4008 9.5 4.7008 9.5 3.1008C9.5 2.8008 9.4 2.4008 9.3 2.2008V2.0008C9.5 2.0008 9.6 2.0008 9.7 2.1008ZM10.1 9.9008C12 7.9008 13.7 5.7008 13.7 3.5008C13.7 3.1008 13.6 2.7008 13.5 2.2008C13.5 2.1008 13.5 2.0008 13.6 1.9008C13.7 1.8008 13.8 1.9008 13.8 2.0008C14.8 3.3008 15.3 4.5008 15.3 5.9008C15.3 7.6008 14.6 9.2008 12.9 11.0008C11 13.0008 9.3 15.2008 9.3 17.4008C9.3 17.8008 9.4 18.2008 9.5 18.7008C9.5 18.8008 9.5 18.9008 9.4 19.0008C9.3 19.1008 9.2 19.0008 9.2 18.9008C8.2 17.6008 7.7 16.4008 7.7 15.0008C7.7 13.3008 8.4 11.7008 10.1 9.9008Z" />
    </Svg>
  );
};
