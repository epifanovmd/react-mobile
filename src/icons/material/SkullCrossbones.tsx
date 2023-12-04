import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkullCrossbonesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.8 18.5L21.8 20.1L21.4 22L12 19.5L2.6 22L2.1 20.1L8.1 18.5L2 16.9L2.5 15L11.9 17.5L21.3 15L21.8 16.9L15.8 18.5ZM18 8C18 9.8 17.2 11.3 16 12.4V15H14V13.7V13H13V15H11V13H10V13.7V15H8V12.4C6.8 11.3 6 9.8 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8ZM11 7.5C11 6.7 10.3 6 9.5 6C8.7 6 8 6.7 8 7.5C8 8.3 8.7 9 9.5 9C10.3 9 11 8.3 11 7.5ZM13 11L12 9L11 11H13ZM16 7.5C16 6.7 15.3 6 14.5 6C13.7 6 13 6.7 13 7.5C13 8.3 13.7 9 14.5 9C15.3 9 16 8.3 16 7.5Z" />
    </Svg>
  );
};
