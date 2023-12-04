import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadSquareOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 6H3C2.46957 6 1.96086 6.21071 1.58579 6.58579C1.21071 6.96086 1 7.46957 1 8V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H21C21.5304 18 22.0391 17.7893 22.4142 17.4142C22.7893 17.0391 23 16.5304 23 16V8C23 7.46957 22.7893 6.96086 22.4142 6.58579C22.0391 6.21071 21.5304 6 21 6ZM21 16H3V8H21V16ZM6 15H8V13H10V11H8V9H6V11H4V13H6V15ZM14.5 12C14.8978 12 15.2794 12.158 15.5607 12.4393C15.842 12.7206 16 13.1022 16 13.5C16 13.8978 15.842 14.2794 15.5607 14.5607C15.2794 14.842 14.8978 15 14.5 15C14.1022 15 13.7206 14.842 13.4393 14.5607C13.158 14.2794 13 13.8978 13 13.5C13 13.1022 13.158 12.7206 13.4393 12.4393C13.7206 12.158 14.1022 12 14.5 12ZM18.5 9C18.8978 9 19.2794 9.15804 19.5607 9.43934C19.842 9.72064 20 10.1022 20 10.5C20 10.8978 19.842 11.2794 19.5607 11.5607C19.2794 11.842 18.8978 12 18.5 12C18.1022 12 17.7206 11.842 17.4393 11.5607C17.158 11.2794 17 10.8978 17 10.5C17 10.1022 17.158 9.72064 17.4393 9.43934C17.7206 9.15804 18.1022 9 18.5 9Z" />
    </Svg>
  );
};
