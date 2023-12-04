import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FastForward30Icon: FC<FlexSvgProps> = ({
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
      <Path d="M11.5 3C6.85003 3 2.92003 6.03 1.53003 10.22L3.90003 11C4.95003 7.81 7.96003 5.5 11.5 5.5C13.46 5.5 15.23 6.22 16.62 7.38L14 10H21V3L18.4 5.6C16.55 4 14.15 3 11.5 3ZM19 14V20C19 21.11 18.11 22 17 22H15C14.4696 22 13.9609 21.7893 13.5858 21.4142C13.2107 21.0391 13 20.5304 13 20V14C13 13.4696 13.2107 12.9609 13.5858 12.5858C13.9609 12.2107 14.4696 12 15 12H17C18.11 12 19 12.9 19 14ZM15 14V20H17V14H15ZM11 20C11 21.11 10.1 22 9.00003 22H5.00003V20H9.00003V18H7.00003V16H9.00003V14H5.00003V12H9.00003C9.53046 12 10.0392 12.2107 10.4142 12.5858C10.7893 12.9609 11 13.4696 11 14V15.5C11 15.8978 10.842 16.2794 10.5607 16.5607C10.2794 16.842 9.89785 17 9.50003 17C9.89785 17 10.2794 17.158 10.5607 17.4393C10.842 17.7206 11 18.1022 11 18.5V20Z" />
    </Svg>
  );
};
