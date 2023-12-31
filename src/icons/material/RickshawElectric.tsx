import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RickshawElectricIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 12.05V10.73C20 10.26 19.84 9.8 19.54 9.44L15.6 4.72C15.22 4.26 14.66 4 14.06 4H4C2.9 4 2 4.9 2 6V13C2 14.1 2.9 15 4 15H4.05C4.28 16.14 5.29 17 6.5 17C7.71 17 8.72 16.14 8.95 15H17.05C17.28 16.14 18.29 17 19.5 17C20.88 17 22 15.88 22 14.5C22 13.29 21.14 12.28 20 12.05ZM3.5 6C3.5 5.73 3.73 5.5 4 5.5H7V10H3.5V6ZM6.5 15.5C5.95 15.5 5.5 15.05 5.5 14.5C5.5 13.95 5.95 13.5 6.5 13.5C7.05 13.5 7.5 13.95 7.5 14.5C7.5 15.05 7.05 15.5 6.5 15.5ZM13 13.5H9V12H11V10H9V5.5H13V13.5ZM15 6.34L18.05 10H15V6.34ZM19.5 15.5C18.95 15.5 18.5 15.05 18.5 14.5C18.5 13.95 18.95 13.5 19.5 13.5C20.05 13.5 20.5 13.95 20.5 14.5C20.5 15.05 20.05 15.5 19.5 15.5ZM11 20H7L13 23V21H17L11 18V20Z" />
    </Svg>
  );
};
