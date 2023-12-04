import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DisqusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0799 22C9.62991 22 7.38991 21.11 5.65991 19.63L1.40991 20.21L3.04991 16.15C2.49991 14.88 2.15991 13.5 2.15991 12C2.15991 6.5 6.59991 2 12.0799 2C17.5599 2 21.9999 6.5 21.9999 12C21.9999 17.5 17.5599 22 12.0799 22ZM17.4999 11.97V11.94C17.4999 9.06 15.4599 7 11.9499 7H8.15991V17H11.8999C15.4299 17 17.4999 14.86 17.4999 11.97ZM11.9999 14.54H10.8899V9.46H11.9999C13.6199 9.46 14.6999 10.39 14.6999 12C14.6999 13.63 13.6199 14.54 11.9999 14.54Z" />
    </Svg>
  );
};
