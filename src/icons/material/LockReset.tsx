import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LockResetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.63 2C18.16 2 22.64 6.5 22.64 12C22.64 17.5 18.16 22 12.63 22C9.12 22 6.05 20.18 4.26 17.43L5.84 16.18C7.25 18.47 9.76 20 12.64 20C14.7617 20 16.7966 19.1571 18.2969 17.6569C19.7971 16.1566 20.64 14.1217 20.64 12C20.64 9.87827 19.7971 7.84344 18.2969 6.34315C16.7966 4.84285 14.7617 4 12.64 4C8.56 4 5.2 7.06 4.71 11H7.47L3.73 14.73L0 11H2.69C3.19 5.95 7.45 2 12.63 2ZM15.59 10.24C16.09 10.25 16.5 10.65 16.5 11.16V15.77C16.5 16.27 16.09 16.69 15.58 16.69H10.05C9.54 16.69 9.13 16.27 9.13 15.77V11.16C9.13 10.65 9.54 10.25 10.04 10.24V9.23C10.04 7.7 11.29 6.46 12.81 6.46C14.34 6.46 15.59 7.7 15.59 9.23V10.24ZM12.81 7.86C12.06 7.86 11.44 8.47 11.44 9.23V10.24H14.19V9.23C14.19 8.47 13.57 7.86 12.81 7.86Z" />
    </Svg>
  );
};
