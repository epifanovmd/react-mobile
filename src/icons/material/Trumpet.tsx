import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrumpetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 6C21 11 15 11 15 11H4C3 11 2 10 2 10H1V14H2C2 14 3 13 4 13H4.3C4.1 13.3 4 13.6 4 14V16C4 17.1 4.9 18 6 18H7V19H9V18H10V19H12V18H13V19H15V18H16C17.1 18 18 17.1 18 16V14C18 13.9 18 13.7 17.9 13.6C19.6 14.2 21.4 15.4 22 18H23V6H22ZM6 16.5C5.7 16.5 5.5 16.3 5.5 16V14C5.5 13.7 5.7 13.5 6 13.5H7V16.5H6ZM9 16.5V13.5H10V16.5H9ZM12 16.5V13.5H13V16.5H12ZM16.5 16C16.5 16.3 16.3 16.5 16 16.5H15V13.5H16C16.3 13.5 16.5 13.7 16.5 14V16ZM9 10H7V9H9V10ZM12 10H10V9H12V10ZM15 10H13V9H15V10Z" />
    </Svg>
  );
};
