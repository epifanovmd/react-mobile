import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RollupjsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.46 8.64C19.46 11.11 18.11 13.26 16.12 14.4C16 14.5 15.93 14.66 16 14.81L19.41 21.55C19.5 21.76 19.36 22 19.13 22H6.10004L6.17004 21.96C6.66004 21.68 10.06 14.97 13.38 11.79C16.7 8.61 17.12 9.67 15.29 6.21C15.29 6.21 16.7 8.96 15.5 9.17C14.56 9.34 12.4 7.25 13.2 5.37C14 3.53 17.15 3.88 18.6 5.38C19.15 6.34 19.46 7.45 19.46 8.64ZM7.16004 13.13C5.84004 15.56 5.00004 17.33 4.54004 18.57V2.31C4.54004 2.14 4.68004 2 4.85004 2H12.92C15.26 2.04 17.31 3.28 18.46 5.15C17.62 4.1 16.3 3.5 15 3.5C12.53 3.5 11.91 4.4 7.16004 13.13Z" />
    </Svg>
  );
};
