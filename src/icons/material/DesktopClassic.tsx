import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DesktopClassicIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 2C4.89 2 4 2.89 4 4V12C4 13.11 4.89 14 6 14H18C19.11 14 20 13.11 20 12V4C20 2.89 19.11 2 18 2H6ZM6 4H18V12H6V4ZM4 15C2.89 15 2 15.89 2 17V20C2 21.11 2.89 22 4 22H20C21.11 22 22 21.11 22 20V17C22 15.89 21.11 15 20 15H4ZM8 17H20V20H8V17ZM9 17.75V19.25H13V17.75H9ZM15 17.75V19.25H19V17.75H15Z" />
    </Svg>
  );
};
