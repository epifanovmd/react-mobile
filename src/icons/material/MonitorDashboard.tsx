import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MonitorDashboardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 16V4H3V16H21ZM21 2C21.5304 2 22.0391 2.21071 22.4142 2.58579C22.7893 2.96086 23 3.46957 23 4V16C23 16.5304 22.7893 17.0391 22.4142 17.4142C22.0391 17.7893 21.5304 18 21 18H14V20H16V22H8V20H10V18H3C1.89 18 1 17.1 1 16V4C1 2.89 1.89 2 3 2H21ZM5 6H14V11H5V6ZM15 6H19V8H15V6ZM19 9V14H15V9H19ZM5 12H9V14H5V12ZM10 12H14V14H10V12Z" />
    </Svg>
  );
};
