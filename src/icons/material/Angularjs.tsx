import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AngularjsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2.5L20.84 5.65L19.5 17.35L12 21.5L4.50003 17.35L3.16003 5.65L12 2.5ZM12 4.5L5.00003 7L6.08003 16.22L12 19.5L17.92 16.22L19 7L12 4.5ZM12 5.72L16.58 16H14.87L13.94 13.72H10.04L9.12003 16H7.41003L12 5.72ZM13.34 12.3L12 9.07L10.66 12.3H13.34Z" />
    </Svg>
  );
};
