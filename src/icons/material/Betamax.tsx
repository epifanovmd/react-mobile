import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BetamaxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 5C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4ZM8 9C9.06087 9 10.0783 9.42143 10.8284 10.1716C11.5786 10.9217 12 11.9391 12 13C12 14.0609 11.5786 15.0783 10.8284 15.8284C10.0783 16.5786 9.06087 17 8 17C6.93913 17 5.92172 16.5786 5.17157 15.8284C4.42143 15.0783 4 14.0609 4 13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9ZM13 9H20V17H13V9ZM8 11C7.46957 11 6.96086 11.2107 6.58579 11.5858C6.21071 11.9609 6 12.4696 6 13C6 13.5304 6.21071 14.0391 6.58579 14.4142C6.96086 14.7893 7.46957 15 8 15C8.53043 15 9.03914 14.7893 9.41421 14.4142C9.78929 14.0391 10 13.5304 10 13C10 12.4696 9.78929 11.9609 9.41421 11.5858C9.03914 11.2107 8.53043 11 8 11Z" />
    </Svg>
  );
};
