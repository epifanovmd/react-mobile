import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentCutIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3L13 9L15 11L22 4V3H19ZM12 12.5C11.8674 12.5 11.7402 12.4473 11.6464 12.3536C11.5527 12.2598 11.5 12.1326 11.5 12C11.5 11.8674 11.5527 11.7402 11.6464 11.6464C11.7402 11.5527 11.8674 11.5 12 11.5C12.1326 11.5 12.2598 11.5527 12.3536 11.6464C12.4473 11.7402 12.5 11.8674 12.5 12C12.5 12.1326 12.4473 12.2598 12.3536 12.3536C12.2598 12.4473 12.1326 12.5 12 12.5ZM6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18C4 16.89 4.9 16 6 16C6.53043 16 7.03914 16.2107 7.41421 16.5858C7.78929 16.9609 8 17.4696 8 18C8 19.11 7.1 20 6 20ZM6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.89 4.9 4 6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 7.11 7.1 8 6 8ZM9.64 7.64C9.87 7.14 10 6.59 10 6C10 4.93913 9.57857 3.92172 8.82843 3.17157C8.07828 2.42143 7.06087 2 6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6C2 7.06087 2.42143 8.07828 3.17157 8.82843C3.92172 9.57857 4.93913 10 6 10C6.59 10 7.14 9.87 7.64 9.64L10 12L7.64 14.36C7.14 14.13 6.59 14 6 14C4.93913 14 3.92172 14.4214 3.17157 15.1716C2.42143 15.9217 2 16.9391 2 18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22C7.06087 22 8.07828 21.5786 8.82843 20.8284C9.57857 20.0783 10 19.0609 10 18C10 17.41 9.87 16.86 9.64 16.36L12 14L19 21H22V20L9.64 7.64Z" />
    </Svg>
  );
};
