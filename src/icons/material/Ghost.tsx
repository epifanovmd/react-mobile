import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GhostIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C9.61305 2 7.32387 2.94821 5.63604 4.63604C3.94821 6.32387 3 8.61305 3 11V22L6 19L9 22L12 19L15 22L18 19L21 22V11C21 8.61305 20.0518 6.32387 18.364 4.63604C16.6761 2.94821 14.3869 2 12 2ZM9 8C9.53043 8 10.0391 8.21071 10.4142 8.58579C10.7893 8.96086 11 9.46957 11 10C11 10.5304 10.7893 11.0391 10.4142 11.4142C10.0391 11.7893 9.53043 12 9 12C8.46957 12 7.96086 11.7893 7.58579 11.4142C7.21071 11.0391 7 10.5304 7 10C7 9.46957 7.21071 8.96086 7.58579 8.58579C7.96086 8.21071 8.46957 8 9 8ZM15 8C15.5304 8 16.0391 8.21071 16.4142 8.58579C16.7893 8.96086 17 9.46957 17 10C17 10.5304 16.7893 11.0391 16.4142 11.4142C16.0391 11.7893 15.5304 12 15 12C14.4696 12 13.9609 11.7893 13.5858 11.4142C13.2107 11.0391 13 10.5304 13 10C13 9.46957 13.2107 8.96086 13.5858 8.58579C13.9609 8.21071 14.4696 8 15 8Z" />
    </Svg>
  );
};
