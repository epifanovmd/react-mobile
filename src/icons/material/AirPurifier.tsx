import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirPurifierIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 9C12.0609 9 13.0783 9.42143 13.8284 10.1716C14.5786 10.9217 15 11.9391 15 13C15 14.0609 14.5786 15.0783 13.8284 15.8284C13.0783 16.5786 12.0609 17 11 17C9.93913 17 8.92172 16.5786 8.17157 15.8284C7.42143 15.0783 7 14.0609 7 13C7 11.9391 7.42143 10.9217 8.17157 10.1716C8.92172 9.42143 9.93913 9 11 9ZM11 11C10.4696 11 9.96086 11.2107 9.58579 11.5858C9.21071 11.9609 9 12.4696 9 13C9 13.5304 9.21071 14.0391 9.58579 14.4142C9.96086 14.7893 10.4696 15 11 15C11.5304 15 12.0391 14.7893 12.4142 14.4142C12.7893 14.0391 13 13.5304 13 13C13 12.4696 12.7893 11.9609 12.4142 11.5858C12.0391 11.2107 11.5304 11 11 11ZM7 4H14C15.0609 4 16.0783 4.42143 16.8284 5.17157C17.5786 5.92172 18 6.93913 18 8V9H16V8C16 7.46957 15.7893 6.96086 15.4142 6.58579C15.0391 6.21071 14.5304 6 14 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V20H16V18H18V22H3V8C3 6.93913 3.42143 5.92172 4.17157 5.17157C4.92172 4.42143 5.93913 4 7 4ZM16 11C18.5 11 18.5 9 21 9V11C18.5 11 18.5 13 16 13V11ZM16 15C18.5 15 18.5 13 21 13V15C18.5 15 18.5 17 16 17V15Z" />
    </Svg>
  );
};
