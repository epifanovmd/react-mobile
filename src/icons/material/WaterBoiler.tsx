import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterBoilerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8ZM12 4.97C12.5304 4.97 13.0391 5.18071 13.4142 5.55579C13.7893 5.93086 14 6.43957 14 6.97C14 7.23264 13.9483 7.49272 13.8478 7.73537C13.7472 7.97802 13.5999 8.1985 13.4142 8.38421C13.2285 8.56993 13.008 8.71725 12.7654 8.81776C12.5227 8.91827 12.2626 8.97 12 8.97C11.4696 8.97 10.9609 8.75929 10.5858 8.38421C10.2107 8.00914 10 7.50043 10 6.97C10 6.43957 10.2107 5.93086 10.5858 5.55579C10.9609 5.18071 11.4696 4.97 12 4.97ZM10 14.5H14V16H10V14.5Z" />
    </Svg>
  );
};
