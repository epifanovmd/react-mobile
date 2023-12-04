import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyeRefreshOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 9C13.7 9 15 10.3 15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9ZM18 18.5L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5C15.5 19.9 16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5C14 16.3 15.8 14.5 18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18ZM12 18.5C12 18.2 12 17.8 12.1 17.5H12C8.2 17.5 4.8 15.4 3.2 12C4.8 8.6 8.2 6.5 12 6.5C15.8 6.5 19.2 8.6 20.8 12C20.7 12.1 20.7 12.2 20.6 12.4C21.2 12.6 21.8 12.9 22.4 13.3C22.6 12.9 22.8 12.4 23 12C21.3 7.6 17 4.5 12 4.5C7 4.5 2.7 7.6 1 12C2.7 16.4 7 19.5 12 19.5H12.1C12 19.2 12 18.8 12 18.5Z" />
    </Svg>
  );
};
