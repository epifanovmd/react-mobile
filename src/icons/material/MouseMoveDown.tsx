import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseMoveDownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 8.99984H2C2 6.03984 4.17 3.56984 7 3.08984V8.99984ZM20 6.99984H18V12.9998H15L19 16.9998L23 12.9998H20V6.99984ZM9 3.08984V8.99984H14C14 6.03984 11.83 3.56984 9 3.08984ZM2 14.9998C2 18.2998 4.7 20.9998 8 20.9998C11.3 20.9998 14 18.2998 14 14.9998V10.9998H2V14.9998Z" />
    </Svg>
  );
};
