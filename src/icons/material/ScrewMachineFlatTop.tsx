import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScrewMachineFlatTopIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.5 7.3L13.5 8V7H10.5V10L9.5 10.7V11.7L14.5 8.4V7.3ZM14.5 11.3L13.5 12V10L10.5 12V14L9.5 14.7V15.7L14.5 12.4V11.3ZM14.5 15.3L13.5 16V14L10.5 16V18L9.5 18.7V19.7L14.5 16.4V15.3ZM8 3C8 3 7 3 7 4L10 6H14L17 4C17 4 17 3 16 3C15 3 8 3 8 3ZM13.5 18V21H10.5V20L13.5 18Z" />
    </Svg>
  );
};
