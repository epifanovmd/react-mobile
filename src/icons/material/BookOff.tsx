import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.6799 2.11998L11.9999 8.79998V1.99998H17.9999C18.2399 1.99998 18.4599 2.04998 18.6799 2.11998ZM9.49989 7.49998L6.99989 8.99998V1.99998H5.99989C4.88989 1.99998 3.99989 2.89998 3.99989 3.99998V16.8L11.8799 8.92998L9.49989 7.49998ZM21.6099 1.72998L1.88989 21.46L3.15989 22.73L4.53989 21.35C4.89989 21.75 5.41989 22 5.99989 22H17.9999C19.1099 22 19.9999 21.11 19.9999 20V5.88998L22.8899 2.99998L21.6099 1.72998Z" />
    </Svg>
  );
};
