import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyeRefreshIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9ZM18 18.5L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5C15.5 19.9 16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5C14 16.3 15.8 14.5 18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18ZM12.1 19.5C12 19.5 12.1 19.5 12.1 19.5C7 19.5 2.7 16.4 1 12C2.7 7.6 7 4.5 12 4.5C17 4.5 21.3 7.6 23 12C22.8 12.4 22.6 12.9 22.4 13.3C21.3 12.5 20 12 18.5 12C18 12 17.5 12.1 17 12.2V12C17 9.2 14.8 7 12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17H12.2C12.1 17.5 12 18 12 18.5C12 18.8 12 19.2 12.1 19.5Z" />
    </Svg>
  );
};
