import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DivingSnorkelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V10C2 10.5304 2.21071 11.0391 2.58579 11.4142C2.96086 11.7893 3.46957 12 4 12H7.15C7.57 12 7.95 12.24 8.1 12.63C8.44 13.68 9.58 14.25 10.62 13.91C11.23 13.71 11.7 13.23 11.9 12.63C12.05 12.24 12.43 12 12.85 12H16C16.5304 12 17.0391 11.7893 17.4142 11.4142C17.7893 11.0391 18 10.5304 18 10V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3ZM16 10H11.35C11.1 9.46 10.59 9.09 10 9C9.41 9.09 8.9 9.46 8.65 10H4V5H16V10ZM22 2V15.5C22 16.3536 21.8319 17.1988 21.5052 17.9874C21.1786 18.7761 20.6998 19.4926 20.0962 20.0962C19.4926 20.6998 18.7761 21.1786 17.9874 21.5052C17.1988 21.8319 16.3536 22 15.5 22C13.79 22 12.15 21.32 10.93 20.12C8.95 20.58 6.88 19.79 5.71 18.12L7.62 17.29C8.5 18.22 9.84 18.5 11 18C11.2 17.91 11.39 17.8 11.56 17.67C12.4 17.05 12.87 16.04 12.78 15L14.69 14.17C15.1 16.04 14.41 18 12.9 19.17C13.66 19.71 14.57 20 15.5 20C18 20 20 18 20 15.5V2H22Z" />
    </Svg>
  );
};
