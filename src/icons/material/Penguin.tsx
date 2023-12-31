import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PenguinIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 16C19 17.72 18.37 19.3 17.34 20.5C17.75 20.89 18 21.41 18 22H6C6 21.41 6.25 20.89 6.66 20.5C5.63 19.3 5 17.72 5 16H3C3 14.75 3.57 13.64 4.46 12.91L4.47 12.89C6 11.81 7 10 7 8V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8C17 10 18 11.81 19.53 12.89L19.54 12.91C20.43 13.64 21 14.75 21 16H19ZM16 16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12C10.9391 12 9.92172 12.4214 9.17157 13.1716C8.42143 13.9217 8 14.9391 8 16C8 17.0609 8.42143 18.0783 9.17157 18.8284C9.92172 19.5786 10.9391 20 12 20C13.0609 20 14.0783 19.5786 14.8284 18.8284C15.5786 18.0783 16 17.0609 16 16ZM10 9L12 10.5L14 9L12 7.5L10 9ZM10 5C9.73478 5 9.48043 5.10536 9.29289 5.29289C9.10536 5.48043 9 5.73478 9 6C9 6.26522 9.10536 6.51957 9.29289 6.70711C9.48043 6.89464 9.73478 7 10 7C10.2652 7 10.5196 6.89464 10.7071 6.70711C10.8946 6.51957 11 6.26522 11 6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM14 5C13.7348 5 13.4804 5.10536 13.2929 5.29289C13.1054 5.48043 13 5.73478 13 6C13 6.26522 13.1054 6.51957 13.2929 6.70711C13.4804 6.89464 13.7348 7 14 7C14.2652 7 14.5196 6.89464 14.7071 6.70711C14.8946 6.51957 15 6.26522 15 6C15 5.73478 14.8946 5.48043 14.7071 5.29289C14.5196 5.10536 14.2652 5 14 5Z" />
    </Svg>
  );
};
