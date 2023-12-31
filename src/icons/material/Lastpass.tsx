import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LastpassIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 12C14 11.4696 14.2107 10.9609 14.5858 10.5858C14.9609 10.2107 15.4696 10 16 10C16.5304 10 17.0391 10.2107 17.4142 10.5858C17.7893 10.9609 18 11.4696 18 12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14C15.4696 14 14.9609 13.7893 14.5858 13.4142C14.2107 13.0391 14 12.5304 14 12ZM8 12C8 11.4696 8.21071 10.9609 8.58579 10.5858C8.96086 10.2107 9.46957 10 10 10C10.5304 10 11.0391 10.2107 11.4142 10.5858C11.7893 10.9609 12 11.4696 12 12C12 12.5304 11.7893 13.0391 11.4142 13.4142C11.0391 13.7893 10.5304 14 10 14C9.46957 14 8.96086 13.7893 8.58579 13.4142C8.21071 13.0391 8 12.5304 8 12ZM2 12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12C6 12.5304 5.78929 13.0391 5.41421 13.4142C5.03914 13.7893 4.53043 14 4 14C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12ZM22 5H20V19H22V5Z" />
    </Svg>
  );
};
