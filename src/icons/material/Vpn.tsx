import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VpnIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 5H15L12 8L9 5ZM10.5 14.66C10.2 15 10 15.5 10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.45 13.78 14.95 13.41 14.59L14.83 13.17C15.55 13.9 16 14.9 16 16C16 17.0609 15.5786 18.0783 14.8284 18.8284C14.0783 19.5786 13.0609 20 12 20C10.9391 20 9.92172 19.5786 9.17157 18.8284C8.42143 18.0783 8 17.0609 8 16C8 14.93 8.42 13.96 9.1 13.25L9.09 13.24L16.17 6.17C16.89 5.45 17.89 5 19 5C20.0609 5 21.0783 5.42143 21.8284 6.17157C22.5786 6.92172 23 7.93913 23 9C23 10.0609 22.5786 11.0783 21.8284 11.8284C21.0783 12.5786 20.0609 13 19 13C17.9 13 16.9 12.55 16.17 11.83L17.59 10.41C17.95 10.78 18.45 11 19 11C19.5304 11 20.0391 10.7893 20.4142 10.4142C20.7893 10.0391 21 9.53043 21 9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7C18.45 7 17.95 7.22 17.59 7.59L10.5 14.66ZM6.41 7.59C6.05 7.22 5.55 7 5 7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9C3 9.53043 3.21071 10.0391 3.58579 10.4142C3.96086 10.7893 4.46957 11 5 11C5.55 11 6.05 10.78 6.41 10.41L7.83 11.83C7.1 12.55 6.1 13 5 13C3.93913 13 2.92172 12.5786 2.17157 11.8284C1.42143 11.0783 1 10.0609 1 9C1 7.93913 1.42143 6.92172 2.17157 6.17157C2.92172 5.42143 3.93913 5 5 5C6.11 5 7.11 5.45 7.83 6.17L10.59 8.93L9.17 10.35L6.41 7.59Z" />
    </Svg>
  );
};
