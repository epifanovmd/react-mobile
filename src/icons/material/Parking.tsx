import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ParkingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.2 11H10V7H13.2C13.7304 7 14.2391 7.21071 14.6142 7.58579C14.9893 7.96086 15.2 8.46957 15.2 9C15.2 9.53043 14.9893 10.0391 14.6142 10.4142C14.2391 10.7893 13.7304 11 13.2 11ZM13 3H6V21H10V15H13C14.5913 15 16.1174 14.3679 17.2426 13.2426C18.3679 12.1174 19 10.5913 19 9C19 5.68 16.31 3 13 3Z" />
    </Svg>
  );
};
