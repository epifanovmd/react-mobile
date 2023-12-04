import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MathCosIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 7C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H6C6.53043 17 7.03914 16.7893 7.41421 16.4142C7.78929 16.0391 8 15.5304 8 15V14H6V15H4V9H6V10H8V9C8 8.46957 7.78929 7.96086 7.41421 7.58579C7.03914 7.21071 6.53043 7 6 7H4ZM11 7C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V15C9 15.5304 9.21071 16.0391 9.58579 16.4142C9.96086 16.7893 10.4696 17 11 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H11ZM11 9H13V15H11V9ZM18 7C17.4696 7 16.9609 7.21071 16.5858 7.58579C16.2107 7.96086 16 8.46957 16 9V11C16 11.5304 16.2107 12.0391 16.5858 12.4142C16.9609 12.7893 17.4696 13 18 13H20V15H16V17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V13C22 12.4696 21.7893 11.9609 21.4142 11.5858C21.0391 11.2107 20.5304 11 20 11H18V9H22V7H18Z" />
    </Svg>
  );
};
