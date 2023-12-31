import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileJpgBoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.5 10.5H12.5V11.5H11.5V10.5ZM20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6ZM9 9H7.5V13.5H6.5V12H5V13.5C5 14.61 5.9 15 7 15C8.1 15 9 14.61 9 13.5V9ZM14 10.5C14 9.67 13.33 9 12.5 9H10V15H11.5V13H12.5C13.33 13 14 12.33 14 11.5V10.5ZM19 10.33C19 9.67 18.47 9 17.67 9H16.33C15.53 9 15 9.67 15 10.33V13.67C15 14.33 15.53 15 16.33 15H17.67C18.47 15 19 14.33 19 13.67V12H17.5V13.5H16.5V10.5H19V10.33Z" />
    </Svg>
  );
};
