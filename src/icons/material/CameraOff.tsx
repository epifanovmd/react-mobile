import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.19995 4.47L2.49995 3.2L20 20.72L18.7299 22L16.73 20H3.99995C3.46952 20 2.96081 19.7893 2.58574 19.4142C2.21066 19.0391 1.99995 18.5304 1.99995 18V6C1.99995 5.78 2.03995 5.57 2.09995 5.37L1.19995 4.47ZM6.99995 4L8.99995 2H15L17 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7892 4.96086 22 5.46957 22 6V18C22 18.6 21.74 19.13 21.32 19.5L16.33 14.5C16.76 13.77 17 12.91 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7C11.09 7 10.23 7.24 9.49995 7.67L5.81995 4H6.99995ZM6.99995 12C6.99995 13.3261 7.52674 14.5979 8.46442 15.5355C9.4021 16.4732 10.6739 17 12 17C12.5 17 13.03 16.92 13.5 16.77L11.72 15C10.29 14.85 9.14995 13.71 8.99995 12.28L7.22995 10.5C7.07995 10.97 6.99995 11.5 6.99995 12ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.35 14.94 12.69 14.83 13L11 9.17C11.31 9.06 11.65 9 12 9Z" />
    </Svg>
  );
};
