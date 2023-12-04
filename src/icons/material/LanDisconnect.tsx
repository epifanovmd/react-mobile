import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanDisconnectIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 1C2.89 1 2 1.89 2 3V7C2 8.11 2.89 9 4 9H1V11H13V9H10C11.11 9 12 8.11 12 7V3C12 1.89 11.11 1 10 1H4ZM4 3H10V7H4V3ZM14 13C12.89 13 12 13.89 12 15V19C12 20.11 12.89 21 14 21H11V23H23V21H20C21.11 21 22 20.11 22 19V15C22 13.89 21.11 13 20 13H14ZM3.88 13.46L2.46 14.88L4.59 17L2.46 19.12L3.88 20.54L6 18.41L8.12 20.54L9.54 19.12L7.41 17L9.54 14.88L8.12 13.46L6 15.59L3.88 13.46ZM14 15H20V19H14V15Z" />
    </Svg>
  );
};
