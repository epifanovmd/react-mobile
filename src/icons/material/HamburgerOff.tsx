import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HamburgerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0001 11.0005C21.1101 11.0005 22.0001 11.9005 22.0001 13.0005C22.0001 14.1005 21.1101 15.0005 20.0001 15.0005H18.2001L14.2001 11.0005H20.0001ZM20.4201 19.7705V19.7605L17.6601 17.0005H17.6501L15.6501 15.0005H15.6601L11.6601 11.0005L9.66011 9.00047L2.39011 1.73047L1.11011 3.00047L4.12011 6.00047C3.00011 7.50047 3.00011 9.00047 3.00011 9.00047H7.11011L9.11011 11.0005H4.00011C2.90011 11.0005 2.00011 11.9005 2.00011 13.0005C2.00011 14.1005 2.90011 15.0005 4.00011 15.0005H13.1101L15.1101 17.0005H3.00011V18.0005C3.00011 19.6605 4.34011 21.0005 6.00011 21.0005H18.0001C18.3301 21.0005 18.6501 20.9305 18.9401 20.8305L20.8401 22.7305L22.1101 21.4605L20.4201 19.7705ZM21.0001 9.00047C21.0001 9.00047 21.0001 3.00047 12.0001 3.00047C9.88011 3.00047 8.28011 3.34047 7.05011 3.85047L12.2001 9.00047H21.0001Z" />
    </Svg>
  );
};
