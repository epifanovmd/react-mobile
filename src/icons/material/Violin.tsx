import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViolinIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 2C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3V5V9C10 9.13261 10.0527 9.25979 10.1464 9.35355C10.2402 9.44732 10.3674 9.5 10.5 9.5H12C12.1326 9.5 12.2598 9.55268 12.3536 9.64645C12.4473 9.74021 12.5 9.86739 12.5 10C12.5 10.1326 12.4473 10.2598 12.3536 10.3536C12.2598 10.4473 12.1326 10.5 12 10.5H10.5C9.73 10.5 9 9.77 9 9V5.16C7.27 5.6 6 7.13 6 9V10.5C6.66304 10.5 7.29893 10.7634 7.76777 11.2322C8.23661 11.7011 8.5 12.337 8.5 13C8.5 13.663 8.23661 14.2989 7.76777 14.7678C7.29893 15.2366 6.66304 15.5 6 15.5V17C6 19.77 8.23 22 11 22H13C15.77 22 18 19.77 18 17V15.5C17.337 15.5 16.7011 15.2366 16.2322 14.7678C15.7634 14.2989 15.5 13.663 15.5 13C15.5 12.337 15.7634 11.7011 16.2322 11.2322C16.7011 10.7634 17.337 10.5 18 10.5V9C18 6.78 16.22 5 14 5V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H11ZM10.75 16.5H13.25L12.75 20H11.25L10.75 16.5Z" />
    </Svg>
  );
};
