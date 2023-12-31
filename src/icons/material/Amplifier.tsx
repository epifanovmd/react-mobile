import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AmplifierIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3H21V21H19C19 21.2652 18.8946 21.5196 18.7071 21.7071C18.5196 21.8946 18.2652 22 18 22C17.7348 22 17.4804 21.8946 17.2929 21.7071C17.1054 21.5196 17 21.2652 17 21H7C7 21.2652 6.89464 21.5196 6.70711 21.7071C6.51957 21.8946 6.26522 22 6 22C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21H3V3H9C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2ZM5 5V9H19V5H5ZM7 6C7.26522 6 7.51957 6.10536 7.70711 6.29289C7.89464 6.48043 8 6.73478 8 7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6ZM12 6H14V7H12V6ZM15 6H16V8H15V6ZM17 6H18V8H17V6ZM12 11C10.9391 11 9.92172 11.4214 9.17157 12.1716C8.42143 12.9217 8 13.9391 8 15C8 16.0609 8.42143 17.0783 9.17157 17.8284C9.92172 18.5786 10.9391 19 12 19C13.0609 19 14.0783 18.5786 14.8284 17.8284C15.5786 17.0783 16 16.0609 16 15C16 13.9391 15.5786 12.9217 14.8284 12.1716C14.0783 11.4214 13.0609 11 12 11ZM10 6C10.2652 6 10.5196 6.10536 10.7071 6.29289C10.8946 6.48043 11 6.73478 11 7C11 7.26522 10.8946 7.51957 10.7071 7.70711C10.5196 7.89464 10.2652 8 10 8C9.73478 8 9.48043 7.89464 9.29289 7.70711C9.10536 7.51957 9 7.26522 9 7C9 6.73478 9.10536 6.48043 9.29289 6.29289C9.48043 6.10536 9.73478 6 10 6Z" />
    </Svg>
  );
};
