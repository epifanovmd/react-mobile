import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 6H17C18.5913 6 20.1174 6.63214 21.2426 7.75736C22.3679 8.88258 23 10.4087 23 12C23 13.5913 22.3679 15.1174 21.2426 16.2426C20.1174 17.3679 18.5913 18 17 18C15.22 18 13.63 17.23 12.53 16H11.47C10.37 17.23 8.78 18 7 18C5.4087 18 3.88258 17.3679 2.75736 16.2426C1.63214 15.1174 1 13.5913 1 12C1 10.4087 1.63214 8.88258 2.75736 7.75736C3.88258 6.63214 5.4087 6 7 6ZM6 9V11H4V13H6V15H8V13H10V11H8V9H6ZM15.5 12C15.1022 12 14.7206 12.158 14.4393 12.4393C14.158 12.7206 14 13.1022 14 13.5C14 13.8978 14.158 14.2794 14.4393 14.5607C14.7206 14.842 15.1022 15 15.5 15C15.8978 15 16.2794 14.842 16.5607 14.5607C16.842 14.2794 17 13.8978 17 13.5C17 13.1022 16.842 12.7206 16.5607 12.4393C16.2794 12.158 15.8978 12 15.5 12ZM18.5 9C18.1022 9 17.7206 9.15804 17.4393 9.43934C17.158 9.72064 17 10.1022 17 10.5C17 10.8978 17.158 11.2794 17.4393 11.5607C17.7206 11.842 18.1022 12 18.5 12C18.8978 12 19.2794 11.842 19.5607 11.5607C19.842 11.2794 20 10.8978 20 10.5C20 10.1022 19.842 9.72064 19.5607 9.43934C19.2794 9.15804 18.8978 9 18.5 9Z" />
    </Svg>
  );
};
