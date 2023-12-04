import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookAlphabetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.81 2C4.83 2.09 4 3 4 4V20C4 21.05 4.95 22 6 22H18C19.05 22 20 21.05 20 20V4C20 2.89 19.1 2 18 2H12V9L9.5 7.5L7 9V2H6C5.94 2 5.87 2 5.81 2ZM12 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V18H13V16H12V18H11V14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13ZM12 14V15H13V14H12ZM15 15H18V16L16 19H18V20H15V19L17 16H15V15Z" />
    </Svg>
  );
};
