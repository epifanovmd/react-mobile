import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TimetableIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 12H15.5V14.82L17.94 16.23L17.19 17.53L14 15.69V12ZM4 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V10.1C21.24 11.36 22 13.09 22 15C22 16.8565 21.2625 18.637 19.9497 19.9497C18.637 21.2625 16.8565 22 15 22C13.09 22 11.36 21.24 10.1 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2ZM4 15V18H8.67C8.24 17.09 8 16.07 8 15H4ZM4 8H10V5H4V8ZM18 8V5H12V8H18ZM4 13H8.29C8.63 11.85 9.26 10.82 10.1 10H4V13ZM15 10.15C13.7137 10.15 12.4801 10.661 11.5705 11.5705C10.661 12.4801 10.15 13.7137 10.15 15C10.15 17.68 12.32 19.85 15 19.85C15.6369 19.85 16.2676 19.7246 16.856 19.4808C17.4444 19.2371 17.9791 18.8798 18.4295 18.4295C18.8798 17.9791 19.2371 17.4444 19.4808 16.856C19.7246 16.2676 19.85 15.6369 19.85 15C19.85 12.32 17.68 10.15 15 10.15Z" />
    </Svg>
  );
};
