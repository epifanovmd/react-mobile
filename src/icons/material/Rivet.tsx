import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RivetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.43 2C10.61 2 9.93995 2.65 9.93995 3.5C9.93995 4.64 9.93995 5.8 9.93995 6.96H7.94995V7.95H15.91V6.96H13.92C13.92 5.8 13.92 4.64 13.92 3.5C13.92 2.65 13.25 2 12.43 2H11.43ZM10.94 8.95V21.87L11.93 22.87L12.92 21.87V8.95H10.94Z" />
    </Svg>
  );
};
