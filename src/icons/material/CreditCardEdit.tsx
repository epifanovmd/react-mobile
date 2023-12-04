import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.6 11.3C20.7 11.2 20.8 11.1 21 11.1C21.1 11.1 21.3 11.2 21.4 11.3L22.6 12.5C22.8 12.7 22.8 13.1 22.6 13.3L21.6 14.3L19.6 12.3L20.6 11.3ZM13 18.9L19 12.8L21.1 14.9L15.1 21H13V18.9ZM11 19.1V18.1L11.6 17.5L18.1 11H4V8H20V9.1L22 7.1V6C22 4.9 21.1 4 20 4H4C3.5 4 3 4.2 2.6 4.6C2.2 5 2 5.5 2 6V18C2 18.5 2.2 19 2.6 19.4C3 19.8 3.5 20 4 20H11V19.1Z" />
    </Svg>
  );
};
