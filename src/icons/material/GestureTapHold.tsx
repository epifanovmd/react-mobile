import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureTapHoldIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.99998 9C9.99998 8.73478 10.1053 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8C11.2652 8 11.5195 8.10536 11.7071 8.29289C11.8946 8.48043 12 8.73478 12 9V13.47L13.21 13.6L18.15 15.79C18.68 16.03 19 16.56 19 17.14V21.5C18.97 22.32 18.32 22.97 17.5 23H11C10.62 23 10.26 22.85 9.99998 22.57L5.09998 18.37L5.83998 17.6C6.02998 17.39 6.29998 17.28 6.57998 17.28H6.79998L9.99998 19V9ZM8.99998 12.44V9C8.99998 8.46957 9.21069 7.96086 9.58576 7.58579C9.96084 7.21071 10.4695 7 11 7C11.5304 7 12.0391 7.21071 12.4142 7.58579C12.7893 7.96086 13 8.46957 13 9V12.44C14.19 11.75 15 10.47 15 9C15 7.93913 14.5785 6.92172 13.8284 6.17157C13.0783 5.42143 12.0608 5 11 5C9.93911 5 8.92169 5.42143 8.17155 6.17157C7.4214 6.92172 6.99998 7.93913 6.99998 9C6.99998 10.47 7.80998 11.75 8.99998 12.44Z" />
    </Svg>
  );
};
