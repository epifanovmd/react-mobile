import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WhiteBalanceSunnyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.55 18.5408L4.96 19.9508L6.76 18.1608L5.34 16.7408L3.55 18.5408ZM11 22.4508C11.32 22.4508 13 22.4508 13 22.4508V19.5008H11V22.4508ZM12 5.50078C10.4087 5.50078 8.88258 6.13292 7.75736 7.25814C6.63214 8.38336 6 9.90948 6 11.5008C6 13.0921 6.63214 14.6182 7.75736 15.7434C8.88258 16.8686 10.4087 17.5008 12 17.5008C13.5913 17.5008 15.1174 16.8686 16.2426 15.7434C17.3679 14.6182 18 13.0921 18 11.5008C18 8.18078 15.31 5.50078 12 5.50078ZM20 12.5008H23V10.5008H20V12.5008ZM17.24 18.1608L19.04 19.9508L20.45 18.5408L18.66 16.7408L17.24 18.1608ZM20.45 4.46078L19.04 3.05078L17.24 4.84078L18.66 6.26078L20.45 4.46078ZM13 0.550781H11V3.50078H13V0.550781ZM4 10.5008H1V12.5008H4V10.5008ZM6.76 4.84078L4.96 3.05078L3.55 4.46078L5.34 6.26078L6.76 4.84078Z" />
    </Svg>
  );
};
