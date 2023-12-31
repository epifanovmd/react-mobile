import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PaletteSwatchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.50005 19.6008L3.80005 20.2008V11.2008L1.40005 17.0008C1.00005 18.1008 1.50005 19.2008 2.50005 19.6008ZM15.2 4.80078L20.2 16.8008L12.9 19.8008L7.90005 7.90078V7.80078L15.2 4.80078ZM15.3 2.80078C15 2.80078 14.8 2.80078 14.5 2.90078L7.10005 6.00078C6.40005 6.30078 5.90005 7.00078 5.90005 7.80078C5.90005 8.00078 5.90005 8.30078 6.00005 8.60078L11 20.5008C11.3 21.3008 12 21.7008 12.8 21.7008C13.1 21.7008 13.3 21.7008 13.6 21.6008L21 18.5008C22 18.1008 22.5 16.9008 22.1 15.9008L17.1 4.00078C16.8 3.20078 16 2.80078 15.3 2.80078ZM10.5 9.90078C9.90005 9.90078 9.50005 9.50078 9.50005 8.90078C9.50005 8.30078 9.90005 7.90078 10.5 7.90078C11.1 7.90078 11.5 8.40078 11.5 8.90078C11.5 9.40078 11.1 9.90078 10.5 9.90078ZM5.90005 19.8008C5.90005 20.9008 6.80005 21.8008 7.90005 21.8008H9.30005L5.90005 13.5008V19.8008Z" />
    </Svg>
  );
};
