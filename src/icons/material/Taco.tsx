import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TacoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 18H5C3.93913 18 2.92172 17.5786 2.17157 16.8284C1.42143 16.0783 1 15.0609 1 14C1 11.8783 1.84285 9.84344 3.34315 8.34315C4.84344 6.84285 6.87827 6 9 6C10.06 6 11.07 6.21 12 6.58C12.93 6.21 13.94 6 15 6C17.1217 6 19.1566 6.84285 20.6569 8.34315C22.1571 9.84344 23 11.8783 23 14C23 15.0609 22.5786 16.0783 21.8284 16.8284C21.0783 17.5786 20.0609 18 19 18ZM3 14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14C7 11.63 8.03 9.5 9.67 8.04L9 8C7.4087 8 5.88258 8.63214 4.75736 9.75736C3.63214 10.8826 3 12.4087 3 14ZM19 16C19.5304 16 20.0391 15.7893 20.4142 15.4142C20.7893 15.0391 21 14.5304 21 14C21 12.4087 20.3679 10.8826 19.2426 9.75736C18.1174 8.63214 16.5913 8 15 8C13.4087 8 11.8826 8.63214 10.7574 9.75736C9.63214 10.8826 9 12.4087 9 14C9 14.73 8.81 15.41 8.46 16H19Z" />
    </Svg>
  );
};
