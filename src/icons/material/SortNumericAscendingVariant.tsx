import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SortNumericAscendingVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.78009 7C9.08009 7.04 10.0001 7.53 10.5701 8.46C11.1301 9.4 11.4101 10.56 11.3901 11.95C11.4001 13.5 11.0901 14.73 10.5001 15.62C9.88009 16.5 8.95009 16.97 7.71009 17C6.45009 16.96 5.54009 16.5 4.96009 15.56C4.38009 14.63 4.09009 13.45 4.09009 12C4.09009 10.55 4.39009 9.36 5.00009 8.44C5.59009 7.5 6.50009 7.04 7.78009 7ZM7.75009 8.63C7.31009 8.63 6.96009 8.9 6.70009 9.46C6.44009 10 6.32009 10.87 6.32009 12C6.31009 13.15 6.44009 14 6.69009 14.54C6.95009 15.1 7.31009 15.37 7.77009 15.37C8.69009 15.37 9.16009 14.24 9.17009 12C9.17009 9.77 8.70009 8.65 7.75009 8.63ZM13.3301 17V15.22L13.7601 15.24L14.3001 15.22L15.3401 15.03C15.6801 14.92 16.0001 14.78 16.2601 14.58C16.5901 14.35 16.8601 14.08 17.0701 13.76C17.2901 13.45 17.4401 13.12 17.5301 12.78L17.5001 12.77C17.0501 13.19 16.3801 13.4 15.4701 13.41C14.6201 13.4 13.9101 13.15 13.3401 12.65C12.7701 12.15 12.5001 11.43 12.4601 10.5C12.4701 9.5 12.8101 8.69 13.4701 8.03C14.1401 7.37 15.0001 7.03 16.1201 7C17.3701 7.04 18.2901 7.45 18.8801 8.24C19.4701 9 19.7601 10 19.7601 11.19C19.7501 12.15 19.6101 13 19.3201 13.76C19.0301 14.5 18.6401 15.13 18.1201 15.64C17.6601 16.06 17.1101 16.38 16.4701 16.61C15.8301 16.83 15.1201 16.96 14.3401 17H13.3301ZM16.0601 8.63C15.6501 8.64 15.3201 8.8 15.0601 9.11C14.8101 9.42 14.6801 9.84 14.6801 10.36C14.6801 10.8 14.8001 11.16 15.0301 11.46C15.2701 11.77 15.6301 11.92 16.1101 11.93C16.4301 11.93 16.7001 11.86 16.9201 11.74C17.1401 11.61 17.3001 11.46 17.4101 11.28C17.5001 11.17 17.5301 10.97 17.5301 10.71C17.5401 10.16 17.4301 9.69 17.2001 9.28C16.9701 8.87 16.5901 8.65 16.0601 8.63ZM9.25009 5L12.5001 1.75L15.7501 5H9.25009Z" />
    </Svg>
  );
};
