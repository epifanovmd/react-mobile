import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AdvertisementsOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.2 9.00001L10.2 7.00001H13C14.1 7.00001 15 7.90001 15 9.00001V11.8L13 9.80001V9.00001H12.2ZM23 9.00001V7.00001H19C17.9 7.00001 17 7.90001 17 9.00001V11C17 12.1 17.9 13 19 13H21V15H18.2L20.2 17H21C22.1 17 23 16.1 23 15V13C23 11.9 22.1 11 21 11H19V9.00001H23ZM22.1 21.5L20.8 22.8L14.4 16.4C14.1 16.7 13.6 17 13 17H9V10.9L7 8.90001V17H5V13H3V17H1V9.00001C1 7.90001 1.9 7.00001 3 7.00001H5.1L1.1 3.00001L2.4 1.70001L22.1 21.5ZM5 9.00001H3V11H5V9.00001ZM13 14.9L11 12.9V15H13V14.9Z" />
    </Svg>
  );
};
