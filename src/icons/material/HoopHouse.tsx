import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HoopHouseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 5C6.5 5 2 9.5 2 15V21H22V15C22 9.5 17.5 5 12 5ZM12 7C14.53 7 16.78 8.17 18.25 10H5.76C7.22 8.17 9.47 7 12 7ZM8 19H4V15C4 13.94 4.21 12.93 4.58 12H8V19ZM14 19H10V12H14V19ZM20 19H16V12H19.42C19.79 12.93 20 13.94 20 15V19Z" />
    </Svg>
  );
};
