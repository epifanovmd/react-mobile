import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TshirtCrewIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 21H7.99998C7.73476 21 7.48041 20.8946 7.29287 20.7071C7.10534 20.5196 6.99998 20.2652 6.99998 20V12.07L5.69998 13.07C5.30998 13.46 4.67998 13.46 4.28998 13.07L1.45998 10.29C1.06998 9.9 1.06998 9.27 1.45998 8.88L7.33998 3H8.99998C8.99998 4.1 10.34 5 12 5C13.66 5 15 4.1 15 3H16.66L22.54 8.88C22.93 9.27 22.93 9.9 22.54 10.29L19.71 13.12C19.32 13.5 18.69 13.5 18.3 13.12L17 12.12V20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21Z" />
    </Svg>
  );
};
