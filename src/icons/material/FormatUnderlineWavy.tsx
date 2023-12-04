import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatUnderlineWavyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 17C15.31 17 18 14.31 18 11V3H15.5V11C15.5 12.93 13.93 14.5 12 14.5C10.07 14.5 8.5 12.93 8.5 11V3H6V11C6 14.31 8.69 17 12 17ZM20 22C18.6 22 17.8 21.3 17.3 20.7C16.8 20.2 16.6 20 16 20C15.4 20 15.2 20.2 14.7 20.7C14.2 21.3 13.4 22 12 22C10.6 22 9.8 21.3 9.3 20.7C8.8 20.2 8.6 20 8 20C7.4 20 7.2 20.2 6.7 20.7C6.2 21.3 5.4 22 4 22V20C4.6 20 4.8 19.8 5.3 19.3C5.8 18.7 6.6 18 8 18C9.4 18 10.2 18.7 10.7 19.3C11.2 19.8 11.4 20 12 20C12.6 20 12.8 19.8 13.3 19.3C13.8 18.7 14.6 18 16 18C17.4 18 18.2 18.7 18.7 19.3C19.2 19.8 19.4 20 20 20V22Z" />
    </Svg>
  );
};
