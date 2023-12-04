import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardTextPlayOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3.00005H14.82C14.25 1.44005 12.53 0.640055 11 1.20005C10.14 1.50005 9.5 2.16005 9.18 3.00005H5C4.46957 3.00005 3.96086 3.21077 3.58579 3.58584C3.21071 3.96091 3 4.46962 3 5.00005V19.0001C3 19.5305 3.21071 20.0392 3.58579 20.4143C3.96086 20.7893 4.46957 21.0001 5 21.0001H15V19.0001H5V5.00005H7V7.00005H17V5.00005H19V14.0001H21V5.00005C21 4.46962 20.7893 3.96091 20.4142 3.58584C20.0391 3.21077 19.5304 3.00005 19 3.00005ZM12 5.00005C11.7348 5.00005 11.4804 4.8947 11.2929 4.70716C11.1054 4.51962 11 4.26527 11 4.00005C11 3.73484 11.1054 3.48048 11.2929 3.29295C11.4804 3.10541 11.7348 3.00005 12 3.00005C12.2652 3.00005 12.5196 3.10541 12.7071 3.29295C12.8946 3.48048 13 3.73484 13 4.00005C13 4.26527 12.8946 4.51962 12.7071 4.70716C12.5196 4.8947 12.2652 5.00005 12 5.00005ZM17 16.0001V22.0001L22 19.0001L17 16.0001ZM17 11.0001H7V9.00005H17V11.0001ZM15 15.0001H7V13.0001H15V15.0001Z" />
    </Svg>
  );
};
