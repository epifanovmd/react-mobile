import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CalendarStartIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 14H4V17H9V14L13 18L9 22V19H4V22H2V14ZM19 19V8.00005H5V12H3V5.00005C3 3.89005 3.89 3.00005 5 3.00005H6V0.998047H8V3.00005H16V0.998047H18V3.00005H19C20.1 3.00005 21 3.89005 21 5.00005V19C21 20.1 20.1 21 19 21H12.83L14.83 19H19Z" />
    </Svg>
  );
};
