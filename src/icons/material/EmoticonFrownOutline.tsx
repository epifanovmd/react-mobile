import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonFrownOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C6.47 2 2 6.5 2 12C2 17.5 6.47 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5Z" />
    </Svg>
  );
};
