import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarBrakeHoldIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5C15.9 5 19 8.1 19 12C19 15.9 15.9 19 12 19ZM20.5 20.5C22.7 18.3 24 15.3 24 12C24 8.7 22.7 5.7 20.5 3.5L19.4 4.6C21.3 6.5 22.5 9.1 22.5 12C22.5 14.9 21.3 17.5 19.4 19.4L20.5 20.5ZM4.6 19.4C2.7 17.5 1.5 14.9 1.5 12C1.5 9.1 2.7 6.5 4.6 4.6L3.5 3.5C1.3 5.7 0 8.7 0 12C0 15.3 1.3 18.3 3.5 20.5L4.6 19.4ZM9 7V17H11V13H13V17H15V7H13V11H11V7H9Z" />
    </Svg>
  );
};
