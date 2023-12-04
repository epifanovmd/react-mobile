import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CoffeeToGoOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 3V11C3 12.0609 3.42143 13.0783 4.17157 13.8284C4.92172 14.5786 5.93913 15 7 15H11C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11V10H17C18.11 10 19 9.11 19 8V5C19 3.9 18.11 3 17 3H3ZM5 5H13V11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13H7C6.46957 13 5.96086 12.7893 5.58579 12.4142C5.21071 12.0391 5 11.5304 5 11V5ZM15 5H17V8H15V5ZM16.67 13.83L15.26 15.24L17 17H3V19H17L15.26 20.76L16.67 22.17L20.84 18L16.67 13.83Z" />
    </Svg>
  );
};
