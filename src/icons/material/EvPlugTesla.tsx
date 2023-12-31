import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EvPlugTeslaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 9C6 8.45 6.45 8 7 8C7.55 8 8 8.45 8 9C8 9.55 7.55 10 7 10C6.45 10 6 9.55 6 9ZM17 10C17.55 10 18 9.55 18 9C18 8.45 17.55 8 17 8C16.45 8 16 8.45 16 9C16 9.55 16.45 10 17 10ZM22 9.93V11C22 15.97 17.97 20 13 20H11C6.03 20 2 16 2 11V9.93C2 6.65 4.65 4 7.93 4H16.07C19.35 4 22 6.65 22 9.93ZM14.5 9C14.5 10.38 15.62 11.5 17 11.5C18.38 11.5 19.5 10.38 19.5 9C19.5 7.62 18.38 6.5 17 6.5C15.62 6.5 14.5 7.62 14.5 9ZM4.5 9C4.5 10.38 5.62 11.5 7 11.5C8.38 11.5 9.5 10.38 9.5 9C9.5 7.62 8.38 6.5 7 6.5C5.62 6.5 4.5 7.62 4.5 9ZM9 17C9 16.45 8.55 16 8 16C7.45 16 7 16.45 7 17C7 17.55 7.45 18 8 18C8.55 18 9 17.55 9 17ZM13.5 17C13.5 16.17 12.83 15.5 12 15.5C11.17 15.5 10.5 16.17 10.5 17C10.5 17.83 11.17 18.5 12 18.5C12.83 18.5 13.5 17.83 13.5 17ZM17 17C17 16.45 16.55 16 16 16C15.45 16 15 16.45 15 17C15 17.55 15.45 18 16 18C16.55 18 17 17.55 17 17ZM19.97 11.66C19.23 12.5 18.18 13 17 13C14.79 13 13 11.21 13 9C13 7.8 13.54 6.73 14.38 6H9.62C10.46 6.73 11 7.8 11 9C11 11.21 9.21 13 7 13C5.82 13 4.76 12.5 4.03 11.66C4.19 13.32 4.93 14.82 6.04 15.94C7.71 14.73 9.76 14 12 14C14.24 14 16.29 14.73 17.96 15.94C19.07 14.82 19.81 13.32 19.97 11.66Z" />
    </Svg>
  );
};
