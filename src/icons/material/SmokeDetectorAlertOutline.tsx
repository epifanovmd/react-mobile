import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmokeDetectorAlertOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H17C18.1 21 19 20.1 19 19V5C19 3.9 18.1 3 17 3ZM17 19H3V5H17V19ZM10 18C13.3 18 16 15.3 16 12C16 8.7 13.3 6 10 6C6.7 6 4 8.7 4 12C4 15.3 6.7 18 10 18ZM10 8C12.2 8 14 9.8 14 12C14 14.2 12.2 16 10 16C7.8 16 6 14.2 6 12C6 9.8 7.8 8 10 8ZM23 7H21V13H23V8V7ZM23 15H21V17H23V15Z" />
    </Svg>
  );
};
