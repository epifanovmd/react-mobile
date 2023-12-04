import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeartFlashIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 2.83008C14.76 2.83008 13.09 3.64008 12 4.90008C10.91 3.64008 9.24 2.83008 7.5 2.83008C4.42 2.83008 2 5.24008 2 8.33008C2 12.1001 5.4 15.1901 10.55 19.8601L12 21.1701L13.45 19.8601C18.6 15.1901 22 12.1001 22 8.33008C22 5.24008 19.58 2.83008 16.5 2.83008ZM12 17.8301V13.8301H9L12 6.83008V10.8301H15" />
    </Svg>
  );
};
