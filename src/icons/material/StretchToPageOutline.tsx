import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StretchToPageOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 2H4C2.89 2 2 2.89 2 4V20C2 21.11 2.89 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.89 21.11 2 20 2ZM20 20H4V4H20V20ZM8.83 10.25L7.29 8.71L6 10V6H10L8.71 7.29L10.25 8.83L8.83 10.25ZM13.75 8.83L15.29 7.29L14 6H18V10L16.71 8.71L15.17 10.25L13.75 8.83ZM15.17 13.75L16.71 15.29L18 14V18H14L15.29 16.71L13.75 15.17L15.17 13.75ZM10.25 15.17L8.71 16.71L10 18H6V14L7.29 15.29L8.83 13.75" />
    </Svg>
  );
};
