import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NukeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.04 12H10V11H5.5C4.57174 11 3.6815 10.6313 3.02513 9.97487C2.36875 9.3185 2 8.42826 2 7.5C2 6.57174 2.36875 5.6815 3.02513 5.02513C3.6815 4.36875 4.57174 4 5.5 4C6.53 4 7.45 4.44 8.09 5.15C8.5 3.35 10.08 2 12 2C13.92 2 15.5 3.35 15.91 5.15C16.55 4.44 17.47 4 18.5 4C19.4283 4 20.3185 4.36875 20.9749 5.02513C21.6313 5.6815 22 6.57174 22 7.5C22 8.42826 21.6313 9.3185 20.9749 9.97487C20.3185 10.6313 19.4283 11 18.5 11H14.04V12ZM10 16.9V15.76H5V13.76H19V15.76H14.04V16.92L20 19.08C20.58 19.29 21 19.84 21 20.5C21 20.8978 20.842 21.2794 20.5607 21.5607C20.2794 21.842 19.8978 22 19.5 22H4.5C4.10218 22 3.72064 21.842 3.43934 21.5607C3.15804 21.2794 3 20.8978 3 20.5C3 19.84 3.42 19.29 4 19.08L10 16.9Z" />
    </Svg>
  );
};
