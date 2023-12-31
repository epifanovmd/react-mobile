import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CommentOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.20011 4.00047L5.20011 2.00047H20.0001C21.1101 2.00047 22.0001 2.90047 22.0001 4.00047V16.0005C22.0001 16.7605 21.5701 17.4105 20.9501 17.7505L19.2001 16.0005H20.0001V4.00047H7.20011ZM22.1101 21.4605L20.8401 22.7305L16.1101 18.0005H13.9001L10.2001 21.7105C10.0001 21.9005 9.75011 22.0005 9.50011 22.0005H9.00011C8.45011 22.0005 8.00011 21.5505 8.00011 21.0005V18.0005H4.00011C2.90011 18.0005 2.00011 17.1105 2.00011 16.0005V4.00047C2.00011 3.97047 2.00011 3.93047 2.00011 3.90047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM14.1101 16.0005L4.00011 5.89047V16.0005H10.0001V19.0805L13.0801 16.0005H14.1101Z" />
    </Svg>
  );
};
