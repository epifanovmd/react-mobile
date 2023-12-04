import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ServerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 1H20C20.2652 1 20.5196 1.10536 20.7071 1.29289C20.8946 1.48043 21 1.73478 21 2V6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H8.82L6.82 5H7V3H5V3.18L3.21 1.39C3.39 1.15 3.68 1 4 1ZM22 22.72L20.73 24L19.73 23H4C3.73478 23 3.48043 22.8946 3.29289 22.7071C3.10536 22.5196 3 22.2652 3 22V18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H13.73L11.73 15H4C3.73478 15 3.48043 14.8946 3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14V10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H5.73L3.68 6.95C3.38 6.85 3.15 6.62 3.05 6.32L1 4.27L2.28 3L22 22.72ZM20 9C20.2652 9 20.5196 9.10536 20.7071 9.29289C20.8946 9.48043 21 9.73478 21 10V14C21 14.2652 20.8946 14.5196 20.7071 14.7071C20.5196 14.8946 20.2652 15 20 15H16.82L10.82 9H20ZM20 17C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18V19.18L18.82 17H20ZM9 5H10V3H9V5ZM9 13H9.73L9 12.27V13ZM9 21H10V19H9V21ZM5 11V13H7V11H5ZM5 19V21H7V19H5Z" />
    </Svg>
  );
};
