import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountLockOpenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 8C6 5.79 7.79 4 10 4C12.21 4 14 5.79 14 8C14 10.21 12.21 12 10 12C7.79 12 6 10.21 6 8ZM12 18.2C12 17.24 12.5 16.34 13.2 15.74V14.5C13.2 14.45 13.22 14.39 13.22 14.34C12.23 14.12 11.15 14 10 14C5.58 14 2 15.79 2 18V20H12V18.2ZM22 18.3V21.8C22 22.4 21.4 23 20.7 23H15.2C14.6 23 14 22.4 14 21.7V18.2C14 17.6 14.6 17 15.2 17V14.5C15.2 13.1 16.6 12 18 12C19.4 12 20.8 13.1 20.8 14.5V15H19.5V14.5C19.5 13.7 18.8 13.2 18 13.2C17.2 13.2 16.5 13.7 16.5 14.5V17H20.8C21.4 17 22 17.6 22 18.3Z" />
    </Svg>
  );
};
