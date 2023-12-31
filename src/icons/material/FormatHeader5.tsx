import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatHeader5Icon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4H5V10H9V4H11V18H9V12H5V18H3V4ZM15 4H20V6H15V10H17C18.0609 10 19.0783 10.4214 19.8284 11.1716C20.5786 11.9217 21 12.9391 21 14C21 15.0609 20.5786 16.0783 19.8284 16.8284C19.0783 17.5786 18.0609 18 17 18H15C14.4696 18 13.9609 17.7893 13.5858 17.4142C13.2107 17.0391 13 16.5304 13 16V15H15V16H17C17.5304 16 18.0391 15.7893 18.4142 15.4142C18.7893 15.0391 19 14.5304 19 14C19 13.4696 18.7893 12.9609 18.4142 12.5858C18.0391 12.2107 17.5304 12 17 12H15C14.4696 12 13.9609 11.7893 13.5858 11.4142C13.2107 11.0391 13 10.5304 13 10V6C13 5.46957 13.2107 4.96086 13.5858 4.58579C13.9609 4.21071 14.4696 4 15 4Z" />
    </Svg>
  );
};
