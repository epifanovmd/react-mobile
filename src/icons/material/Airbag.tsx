import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirbagIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 8C14 8.65661 13.8707 9.30679 13.6194 9.91342C13.3681 10.52 12.9998 11.0712 12.5355 11.5355C12.0712 11.9998 11.52 12.3681 10.9134 12.6194C10.3068 12.8707 9.65661 13 9 13C7.67392 13 6.40215 12.4732 5.46447 11.5355C4.52678 10.5979 4 9.32608 4 8C4 6.67392 4.52678 5.40215 5.46447 4.46447C6.40215 3.52678 7.67392 3 9 3C9.65661 3 10.3068 3.12933 10.9134 3.3806C11.52 3.63188 12.0712 4.00017 12.5355 4.46447C12.9998 4.92876 13.3681 5.47995 13.6194 6.08658C13.8707 6.69321 14 7.34339 14 8ZM10.46 15.55L13 18.03L11 18.05L7.5 21.58L6 20.09L10.46 15.55ZM17 2C18.08 2 19 2.88 19 4C19 5.08 18.12 6 17 6C15.92 6 15 5.12 15 4C15 2.92 15.89 2 17 2ZM14.41 15H11.59L17.29 20.71L18.71 19.29L14.41 15ZM15.12 14.29L19.41 18.59L19.63 18.8C19.86 18.42 20 18 20 17.5V9.5C20 8.83696 19.7366 8.20107 19.2678 7.73223C18.7989 7.26339 18.163 7 17.5 7C16.837 7 16.2011 7.26339 15.7322 7.73223C15.2634 8.20107 15 8.83696 15 9.5V14.17L15.12 14.29Z" />
    </Svg>
  );
};
