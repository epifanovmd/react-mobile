import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElevatorPassengerOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 18V14H11V11.5C11 10.4 10.1 9.5 9 9.5H8C6.9 9.5 6 10.4 6 11.5V14H7V18H10ZM8.5 8.5C9.19 8.5 9.75 7.94 9.75 7.25C9.75 6.56 9.19 6 8.5 6C7.81 6 7.25 6.56 7.25 7.25C7.25 7.94 7.81 8.5 8.5 8.5ZM18 11L15.5 7L13 11H18ZM13 13L15.5 17L18 13H13Z" />
    </Svg>
  );
};
