import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanScooterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 2.25C17.33 2.25 18 2.92 18 3.75C18 4.58 17.33 5.25 16.5 5.25C15.67 5.25 15 4.58 15 3.75C15 2.92 15.67 2.25 16.5 2.25ZM20 18C21.11 18 22 18.9 22 20C22 21.11 21.11 22 20 22C19.26 22 18.61 21.6 18.27 21H8.72997C8.38997 21.6 7.73997 22 6.99997 22C5.89997 22 4.99997 21.11 4.99997 20C4.99997 18.9 5.89997 18 6.99997 18C7.73997 18 8.38997 18.4 8.72997 19H13V13.5L9.72997 11.23L6.76997 14C6.35997 14.37 5.72997 14.34 5.34997 13.94L2.27997 10.65C1.90997 10.24 1.92997 9.61 2.32997 9.23C2.73997 8.86 3.36997 8.88 3.73997 9.28L6.12997 11.84L13.26 5.2L13.3 5.18C13.72 4.82 14.35 4.88 14.71 5.3L16.97 8H20C20.55 8 21 8.45 21 9C21 9.55 20.55 10 20 10H16.5C16.15 10 15.85 9.82 15.67 9.56L14.17 7.77L11.64 10.13L14.57 12.18C14.83 12.36 15 12.66 15 13V19H15.61C16.04 17.13 17.63 15.7 19.58 15.5L18.81 11H20.31L21.39 17.34C20.97 17.12 20.5 17 20 17C18.69 17 17.58 17.84 17.17 19H18.27C18.61 18.4 19.26 18 20 18Z" />
    </Svg>
  );
};
