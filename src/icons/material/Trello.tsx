import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrelloIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5 2H4.5C3.83696 2 3.20107 2.26339 2.73223 2.73223C2.26339 3.20107 2 3.83696 2 4.5V19.5C2 20.163 2.26339 20.7989 2.73223 21.2678C3.20107 21.7366 3.83696 22 4.5 22H19.5C20.163 22 20.7989 21.7366 21.2678 21.2678C21.7366 20.7989 22 20.163 22 19.5V4.5C22 3.83696 21.7366 3.20107 21.2678 2.73223C20.7989 2.26339 20.163 2 19.5 2ZM10.7 17.2C10.7 17.5183 10.5736 17.8235 10.3485 18.0485C10.1235 18.2736 9.81826 18.4 9.5 18.4H5.8C5.14 18.4 4.6 17.86 4.6 17.2V5.8C4.6 5.48174 4.72643 5.17652 4.95147 4.95147C5.17652 4.72643 5.48174 4.6 5.8 4.6H9.5C10.16 4.6 10.7 5.14 10.7 5.8V17.2ZM19.4 12.2C19.4 12.86 18.86 13.4 18.2 13.4H14.5C13.84 13.4 13.3 12.86 13.3 12.2V5.8C13.3 5.14 13.84 4.6 14.5 4.6H18.2C18.86 4.6 19.4 5.14 19.4 5.8V12.2Z" />
    </Svg>
  );
};
