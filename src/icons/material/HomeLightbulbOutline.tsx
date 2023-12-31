import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeLightbulbOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2L2 12H4V21H20V12H22L12 2ZM12 5L18 11V19H6V11L12 5ZM13.5 14.58V16H10.5V14.58C9.07 13.75 8.57 11.92 9.4 10.5C10.23 9.05 12.07 8.56 13.5 9.38C14.93 10.2 15.43 12.05 14.6 13.5C14.34 13.94 13.96 14.32 13.5 14.58ZM13 17H11V18H13V17Z" />
    </Svg>
  );
};
