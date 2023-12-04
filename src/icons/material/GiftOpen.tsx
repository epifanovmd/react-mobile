import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GiftOpenIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 10.92L19.26 9.33005C21.9 7.08005 19.25 2.88005 16.08 4.31005L15.21 4.68005L15.1 3.72005C15 2.64005 14.44 1.87005 13.7 1.42005C12.06 0.467047 9.56 1.12005 9.16 3.50005L6.41 1.92005C5.45 1.36005 4.23 1.69005 3.68 2.65005L2.68 4.38005C2.4 4.86005 2.57 5.47005 3.05 5.75005L10.84 10.25L12.34 7.65005L14.07 8.65005L12.57 11.25L20.36 15.75C20.84 16 21.46 15.86 21.73 15.38L22.73 13.65C23.28 12.69 22.96 11.47 22 10.92ZM12.37 5.00005C11.5 5.25005 10.8 4.32005 11.24 3.55005C11.5 3.07005 12.13 2.91005 12.61 3.18005C13.38 3.63005 13.23 4.79005 12.37 5.00005ZM17.56 8.00005C16.7 8.25005 16 7.32005 16.44 6.55005C16.71 6.07005 17.33 5.91005 17.8 6.18005C18.57 6.63005 18.42 7.79005 17.56 8.00005ZM20.87 16.88C21.28 16.88 21.67 16.74 22 16.5V20C22 21.11 21.11 22 20 22H4C2.9 22 2 21.11 2 20V11H10.15L11 11.5V20H13V12.65L19.87 16.61C20.17 16.79 20.5 16.88 20.87 16.88Z" />
    </Svg>
  );
};
