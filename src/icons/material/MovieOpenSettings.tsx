import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenSettingsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.75 5.45969L12 1.92969L13.97 1.53969L16.71 5.06969L14.75 5.45969ZM21.62 4.09969L20.84 0.179688L16.91 0.959687L19.65 4.49969L21.62 4.09969ZM11.81 6.04969L9.06996 2.49969L7.09996 2.90969L9.84996 6.43969L11.81 6.04969ZM1.99996 7.99969V17.9997C1.99996 19.1097 2.89996 19.9997 3.99996 19.9997H20C21.11 19.9997 22 19.1097 22 17.9997V7.99969H1.99996ZM4.15996 3.49969L3.17996 3.68969C2.09996 3.90969 1.39996 4.95969 1.60996 6.03969L1.99996 7.99969L6.89996 7.02969L4.15996 3.49969ZM11 23.9997H13V21.9997H11V23.9997ZM6.99996 23.9997H8.99996V21.9997H6.99996V23.9997ZM15 23.9997H17V21.9997H15V23.9997Z" />
    </Svg>
  );
};
