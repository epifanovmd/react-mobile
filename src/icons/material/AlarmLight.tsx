import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmLightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 6.9L3.87 4.78L5.28 3.37L7.4 5.5L6 6.9ZM13 1V4H11V1H13ZM20.13 4.78L18 6.9L16.6 5.5L18.72 3.37L20.13 4.78ZM4.5 10.5V12.5H1.5V10.5H4.5ZM19.5 10.5H22.5V12.5H19.5V10.5ZM6 20H18C18.5304 20 19.0391 20.2107 19.4142 20.5858C19.7893 20.9609 20 21.4696 20 22H4C4 21.4696 4.21071 20.9609 4.58579 20.5858C4.96086 20.2107 5.46957 20 6 20ZM12 5C13.5913 5 15.1174 5.63214 16.2426 6.75736C17.3679 7.88258 18 9.4087 18 11V19H6V11C6 9.4087 6.63214 7.88258 7.75736 6.75736C8.88258 5.63214 10.4087 5 12 5Z" />
    </Svg>
  );
};
