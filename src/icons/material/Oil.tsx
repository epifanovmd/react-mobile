import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OilIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 12.5C22 12.5 24 14.67 24 16C24 16.5304 23.7893 17.0391 23.4142 17.4142C23.0391 17.7893 22.5304 18 22 18C21.4695 18 20.9608 17.7893 20.5858 17.4142C20.2107 17.0391 20 16.5304 20 16C20 14.67 22 12.5 22 12.5ZM5.99997 6H9.99997C10.2652 6 10.5195 6.10536 10.7071 6.29289C10.8946 6.48043 11 6.73478 11 7C11 7.26522 10.8946 7.51957 10.7071 7.70711C10.5195 7.89464 10.2652 8 9.99997 8H8.99997V10H11C11.74 10 12.39 10.4 12.73 11L19.24 7.24L22.5 9.13C23 9.4 23.14 10 22.87 10.5C22.59 10.97 22 11.14 21.5 10.86L19.4 9.65L15.75 15.97C15.41 16.58 14.75 17 14 17H4.99997C4.46954 17 3.96083 16.7893 3.58576 16.4142C3.21068 16.0391 2.99997 15.5304 2.99997 15V12C2.99997 11.4696 3.21068 10.9609 3.58576 10.5858C3.96083 10.2107 4.46954 10 4.99997 10H6.99997V8H5.99997C5.73475 8 5.4804 7.89464 5.29286 7.70711C5.10533 7.51957 4.99997 7.26522 4.99997 7C4.99997 6.73478 5.10533 6.48043 5.29286 6.29289C5.4804 6.10536 5.73475 6 5.99997 6ZM4.99997 12V15H14L16.06 11.43L12.6 13.43L11.69 12H4.99997ZM0.379971 9.21L2.08997 7.5C2.49997 7.11 3.10997 7.11 3.49997 7.5C3.88997 7.89 3.88997 8.5 3.49997 8.91L1.78997 10.62C1.39997 11 0.769971 11 0.379971 10.62C-2.92957e-05 10.23 -2.92957e-05 9.6 0.379971 9.21Z" />
    </Svg>
  );
};
