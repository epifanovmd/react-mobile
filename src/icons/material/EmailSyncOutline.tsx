import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailSyncOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5C13.228 19.3642 13.0592 18.689 13 18H3V8L11 13L19 8V11C19.1666 10.9936 19.3334 10.9936 19.5 11C20.0053 11.0015 20.5087 11.0619 21 11.18V6C21 4.9 20.1 4 19 4H3ZM3 6H19L11 11L3 6ZM19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12ZM15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" />
    </Svg>
  );
};
