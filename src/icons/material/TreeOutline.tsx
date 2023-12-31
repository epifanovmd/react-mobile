import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TreeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5 3C8 3 6 5 6 7.5C6 8.11 6.13 8.71 6.37 9.27C5.5 10.12 5 11.28 5 12.5C5 15 7 17 9.5 17C10 17 10.5 16.89 11 16.72V21H13V15.77C13.5 15.91 14 16 14.5 16C15.2223 16 15.9375 15.8577 16.6048 15.5813C17.272 15.3049 17.8784 14.8998 18.3891 14.3891C18.8998 13.8784 19.3049 13.272 19.5813 12.6048C19.8577 11.9375 20 11.2223 20 10.5C20 9.77773 19.8577 9.06253 19.5813 8.39524C19.3049 7.72795 18.8998 7.12163 18.3891 6.61091C17.8784 6.10019 17.272 5.69506 16.6048 5.41866C15.9375 5.14226 15.2223 5 14.5 5C14.41 5 14.33 5 14.24 5C13.41 3.76 12 3 10.5 3ZM10.5 5C11.82 5 12.91 6.03 13 7.35C13.46 7.12 14 7 14.5 7C15.4283 7 16.3185 7.36875 16.9749 8.02513C17.6313 8.6815 18 9.57174 18 10.5C18 11.4283 17.6313 12.3185 16.9749 12.9749C16.3185 13.6313 15.4283 14 14.5 14C13.54 14 12.63 13.61 11.96 12.91C11.76 14.12 10.72 15 9.5 15C8.83696 15 8.20107 14.7366 7.73223 14.2678C7.26339 13.7989 7 13.163 7 12.5C7 11.12 7.8 10.54 9 9.79C8.2 8.76 8 8.16 8 7.5C8 6.83696 8.26339 6.20107 8.73223 5.73223C9.20107 5.26339 9.83696 5 10.5 5Z" />
    </Svg>
  );
};
