import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CartRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.12 8.52996L12 6.40996L9.88 8.53996L8.46 7.11996L10.59 4.99996L8.47 2.87996L9.88 1.46996L12 3.58996L14.12 1.45996L15.54 2.87996L13.41 4.99996L15.53 7.11996L14.12 8.52996ZM7 18C7.53043 18 8.03914 18.2107 8.41421 18.5857C8.78929 18.9608 9 19.4695 9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7892 7.53043 22 7 22C6.46957 22 5.96086 21.7892 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20C5 19.4695 5.21071 18.9608 5.58579 18.5857C5.96086 18.2107 6.46957 18 7 18ZM17 18C17.5304 18 18.0391 18.2107 18.4142 18.5857C18.7893 18.9608 19 19.4695 19 20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7892 17.5304 22 17 22C16.4696 22 15.9609 21.7892 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20C15 19.4695 15.2107 18.9608 15.5858 18.5857C15.9609 18.2107 16.4696 18 17 18ZM7.17 14.75C7.17 14.8163 7.19634 14.8799 7.24322 14.9267C7.29011 14.9736 7.3537 15 7.42 15H19V17H7C6.46957 17 5.96086 16.7892 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.65 5.09 14.32 5.25 14.04L6.6 11.59L3 3.99996H1V1.99996H4.27L5.21 3.99996L6.16 5.99996L8.4 10.73L8.53 11H15.55L18.31 5.99996L19.41 3.99996H19.42L21.16 4.95996L17.3 11.97C16.96 12.59 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75Z" />
    </Svg>
  );
};
