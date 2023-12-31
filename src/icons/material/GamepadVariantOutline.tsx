import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadVariantOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 9H8V11H10V13H8V15H6V13H4V11H6V9ZM18.5 9C18.8978 9 19.2794 9.15804 19.5607 9.43934C19.842 9.72064 20 10.1022 20 10.5C20 10.8978 19.842 11.2794 19.5607 11.5607C19.2794 11.842 18.8978 12 18.5 12C18.1022 12 17.7206 11.842 17.4393 11.5607C17.158 11.2794 17 10.8978 17 10.5C17 10.1022 17.158 9.72064 17.4393 9.43934C17.7206 9.15804 18.1022 9 18.5 9ZM15.5 12C15.8978 12 16.2794 12.158 16.5607 12.4393C16.842 12.7206 17 13.1022 17 13.5C17 13.8978 16.842 14.2794 16.5607 14.5607C16.2794 14.842 15.8978 15 15.5 15C15.1022 15 14.7206 14.842 14.4393 14.5607C14.158 14.2794 14 13.8978 14 13.5C14 13.1022 14.158 12.7206 14.4393 12.4393C14.7206 12.158 15.1022 12 15.5 12ZM17 5C18.8565 5 20.637 5.7375 21.9497 7.05025C23.2625 8.36301 24 10.1435 24 12C24 13.8565 23.2625 15.637 21.9497 16.9497C20.637 18.2625 18.8565 19 17 19C15.04 19 13.27 18.2 12 16.9C10.73 18.2 8.96 19 7 19C5.14348 19 3.36301 18.2625 2.05025 16.9497C0.737498 15.637 0 13.8565 0 12C0 10.1435 0.737498 8.36301 2.05025 7.05025C3.36301 5.7375 5.14348 5 7 5H17ZM7 7C5.67392 7 4.40215 7.52678 3.46447 8.46447C2.52678 9.40215 2 10.6739 2 12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17C8.64 17 10.09 16.21 11 15H13C13.91 16.21 15.36 17 17 17C18.3261 17 19.5979 16.4732 20.5355 15.5355C21.4732 14.5979 22 13.3261 22 12C22 10.6739 21.4732 9.40215 20.5355 8.46447C19.5979 7.52678 18.3261 7 17 7H7Z" />
    </Svg>
  );
};
