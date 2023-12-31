import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MidiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.15 8.25977H22V15.7398H20.15V8.25977ZM13 8.25977H18.43C19 8.25977 19.3 8.73977 19.3 9.29977V14.8098C19.3 15.4998 19 15.7398 18.38 15.7398H13V10.9998H14.87V13.9098H17.5V9.94977H13V8.25977ZM10.32 8.25977H12.14V15.7398H10.32V8.25977ZM2 8.25977H8.55C9.1 8.25977 9.41 8.73977 9.41 9.29977V15.7398H7.59V10.1498H6.5V15.7398H4.87V10.1498H3.83V15.7398H2V8.25977Z" />
    </Svg>
  );
};
