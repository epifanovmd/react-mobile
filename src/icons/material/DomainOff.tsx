import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DomainOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 19.0003H16L14 17.0003H12V19.0003ZM9.99997 15.0003V13.0003H7.99997V15.0003H9.99997ZM9.99997 19.0003V17.0003H7.99997V19.0003H9.99997ZM5.99997 11.0003V9.00027H3.99997V11.0003H5.99997ZM5.99997 15.0003V13.0003H3.99997V15.0003H5.99997ZM5.99997 19.0003V17.0003H3.99997V19.0003H5.99997ZM1.30997 1.78027L22.31 22.6903L21 24.0003L18 21.0003H1.99997V5.00027L0.0899658 3.09027L1.30997 1.78027ZM16 11.0003H18V13.0003H16V11.0003ZM7.99997 5.00027V5.91027L5.10997 3.00027H12V7.00027H22V19.9203L20 17.9103V9.00027H12V9.89027L9.08997 7.00027H9.99997V5.00027H7.99997Z" />
    </Svg>
  );
};
