import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockFastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 4C17.1217 4 19.1566 4.84285 20.6569 6.34315C22.1571 7.84344 23 9.87827 23 12C23 14.1217 22.1571 16.1566 20.6569 17.6569C19.1566 19.1571 17.1217 20 15 20C12.8783 20 10.8434 19.1571 9.34315 17.6569C7.84285 16.1566 7 14.1217 7 12C7 9.87827 7.84285 7.84344 9.34315 6.34315C10.8434 4.84285 12.8783 4 15 4ZM15 6C13.4087 6 11.8826 6.63214 10.7574 7.75736C9.63214 8.88258 9 10.4087 9 12C9 13.5913 9.63214 15.1174 10.7574 16.2426C11.8826 17.3679 13.4087 18 15 18C16.5913 18 18.1174 17.3679 19.2426 16.2426C20.3679 15.1174 21 13.5913 21 12C21 10.4087 20.3679 8.88258 19.2426 7.75736C18.1174 6.63214 16.5913 6 15 6ZM14 8H15.5V11.78L17.83 14.11L16.77 15.17L14 12.4V8ZM2 18C1.73478 18 1.48043 17.8946 1.29289 17.7071C1.10536 17.5196 1 17.2652 1 17C1 16.7348 1.10536 16.4804 1.29289 16.2929C1.48043 16.1054 1.73478 16 2 16H5.83C6.14 16.71 6.54 17.38 7 18H2ZM3 13C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 11.7348 2.10536 11.4804 2.29289 11.2929C2.48043 11.1054 2.73478 11 3 11H5.05L5 12L5.05 13H3ZM4 8C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H7C6.54 6.62 6.14 7.29 5.83 8H4Z" />
    </Svg>
  );
};
