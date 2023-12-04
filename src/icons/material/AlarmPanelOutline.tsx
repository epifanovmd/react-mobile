import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmPanelOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 12H6V10H9V12ZM13.5 10H10.5V12H13.5V10ZM18 10H15V12H18V10ZM18 6H6V9H18V6ZM20 5H4V19H20V5ZM20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20ZM9 13H6V15H9V13ZM13.5 13H10.5V15H13.5V13ZM18 13H15V15H18V13ZM9 16H6V18H9V16ZM13.5 16H10.5V18H13.5V16ZM18 16H15V18H18V16Z" />
    </Svg>
  );
};
