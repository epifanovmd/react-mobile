import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 1.07031C7.05 1.56031 4 4.92031 4 9.00031H11V1.07031ZM4 15.0003C4 17.122 4.84285 19.1569 6.34315 20.6572C7.84344 22.1575 9.87827 23.0003 12 23.0003C14.1217 23.0003 16.1566 22.1575 17.6569 20.6572C19.1571 19.1569 20 17.122 20 15.0003V11.0003H4V15.0003ZM13 1.07031V9.00031H20C20 4.92031 16.94 1.56031 13 1.07031Z" />
    </Svg>
  );
};
