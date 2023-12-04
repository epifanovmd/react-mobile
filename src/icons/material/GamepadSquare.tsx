import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadSquareIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 6H3C2.46957 6 1.96086 6.21071 1.58579 6.58579C1.21071 6.96086 1 7.46957 1 8V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H21C21.5304 18 22.0391 17.7893 22.4142 17.4142C22.7893 17.0391 23 16.5304 23 16V8C23 7.46957 22.7893 6.96086 22.4142 6.58579C22.0391 6.21071 21.5304 6 21 6ZM11 13H8V16H6V13H3V11H6V8H8V11H11V13ZM15.5 15C15.1022 15 14.7206 14.842 14.4393 14.5607C14.158 14.2794 14 13.8978 14 13.5C14 13.1022 14.158 12.7206 14.4393 12.4393C14.7206 12.158 15.1022 12 15.5 12C15.8978 12 16.2794 12.158 16.5607 12.4393C16.842 12.7206 17 13.1022 17 13.5C17 13.8978 16.842 14.2794 16.5607 14.5607C16.2794 14.842 15.8978 15 15.5 15ZM19.5 12C19.1022 12 18.7206 11.842 18.4393 11.5607C18.158 11.2794 18 10.8978 18 10.5C18 10.1022 18.158 9.72064 18.4393 9.43934C18.7206 9.15804 19.1022 9 19.5 9C19.8978 9 20.2794 9.15804 20.5607 9.43934C20.842 9.72064 21 10.1022 21 10.5C21 10.8978 20.842 11.2794 20.5607 11.5607C20.2794 11.842 19.8978 12 19.5 12Z" />
    </Svg>
  );
};
