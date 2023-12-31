import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RobotIndustrialIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.4099 4L15.9999 6.41V6.59L18.4099 9H21.9999V11H17.5899L15.9999 9.41V12H14.9999C14.4695 12 13.9608 11.7893 13.5857 11.4142C13.2107 11.0391 12.9999 10.5304 12.9999 10V7.5H9.85994C9.76994 7.87 9.61994 8.22 9.41994 8.55L15.1799 19H19.9999C20.5304 19 21.0391 19.2107 21.4142 19.5858C21.7892 19.9609 21.9999 20.4696 21.9999 21V22H1.99994V21C1.99994 20.4696 2.21065 19.9609 2.58573 19.5858C2.9608 19.2107 3.46951 19 3.99994 19H10.6099L5.91994 10.5C4.11994 10.47 2.55994 9.24 2.10994 7.5C1.55994 5.36 2.84994 3.18 4.99994 2.63C7.12994 2.08 9.30994 3.36 9.85994 5.5H12.9999V3C12.9999 2.46957 13.2107 1.96086 13.5857 1.58579C13.9608 1.21071 14.4695 1 14.9999 1H15.9999V3.59L17.5899 2H21.9999V4H18.4099ZM5.99994 4.5C5.46951 4.5 4.9608 4.71071 4.58573 5.08579C4.21065 5.46086 3.99994 5.96957 3.99994 6.5C3.99994 7.03043 4.21065 7.53914 4.58573 7.91421C4.9608 8.28929 5.46951 8.5 5.99994 8.5C6.53037 8.5 7.03908 8.28929 7.41415 7.91421C7.78923 7.53914 7.99994 7.03043 7.99994 6.5C7.99994 5.96957 7.78923 5.46086 7.41415 5.08579C7.03908 4.71071 6.53037 4.5 5.99994 4.5Z" />
    </Svg>
  );
};
