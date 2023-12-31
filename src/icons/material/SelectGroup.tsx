import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectGroupIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5H5V3ZM7 3V5H9V3H7ZM11 3V5H13V3H11ZM15 3V5H17V3H15ZM19 3V5H21C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM3 7V9H5V7H3ZM7 7V11H11V7H7ZM13 7V11H17V7H13ZM19 7V9H21V7H19ZM3 11V13H5V11H3ZM19 11V13H21V11H19ZM7 13V17H11V13H7ZM13 13V17H17V13H13ZM3 15V17H5V15H3ZM19 15V17H21V15H19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21V19H3ZM7 19V21H9V19H7ZM11 19V21H13V19H11ZM15 19V21H17V19H15ZM19 19V21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19H19Z" />
    </Svg>
  );
};
