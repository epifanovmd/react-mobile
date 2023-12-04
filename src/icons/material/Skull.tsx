import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkullIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C9.61305 2 7.32387 2.94821 5.63604 4.63604C3.94821 6.32387 3 8.61305 3 11C3 14.03 4.53 16.82 7 18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47 16.81 21 14 21 11C21 8.61305 20.0518 6.32387 18.364 4.63604C16.6761 2.94821 14.3869 2 12 2ZM8 11C8.53043 11 9.03914 11.2107 9.41421 11.5858C9.78929 11.9609 10 12.4696 10 13C10 13.5304 9.78929 14.0391 9.41421 14.4142C9.03914 14.7893 8.53043 15 8 15C7.46957 15 6.96086 14.7893 6.58579 14.4142C6.21071 14.0391 6 13.5304 6 13C6 12.4696 6.21071 11.9609 6.58579 11.5858C6.96086 11.2107 7.46957 11 8 11ZM16 11C16.5304 11 17.0391 11.2107 17.4142 11.5858C17.7893 11.9609 18 12.4696 18 13C18 13.5304 17.7893 14.0391 17.4142 14.4142C17.0391 14.7893 16.5304 15 16 15C15.4696 15 14.9609 14.7893 14.5858 14.4142C14.2107 14.0391 14 13.5304 14 13C14 12.4696 14.2107 11.9609 14.5858 11.5858C14.9609 11.2107 15.4696 11 16 11ZM12 14L13.5 17H10.5L12 14Z" />
    </Svg>
  );
};
