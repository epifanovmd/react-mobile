import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardTextPlayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 3.00005C19.5304 3.00005 20.0391 3.21077 20.4142 3.58584C20.7893 3.96091 21 4.46962 21 5.00005V13.3401C20.36 13.1101 19.68 13.0001 19 13.0001C15.68 13.0001 13 15.6901 13 19.0001C13 19.6801 13.11 20.3601 13.34 21.0001H5C4.46957 21.0001 3.96086 20.7893 3.58579 20.4143C3.21071 20.0392 3 19.5305 3 19.0001V5.00005C3 4.46962 3.21071 3.96091 3.58579 3.58584C3.96086 3.21077 4.46957 3.00005 5 3.00005H9.18C9.5 2.16005 10.14 1.50005 11 1.20005C12.53 0.640055 14.25 1.44005 14.82 3.00005H19ZM12 3.00005C11.7348 3.00005 11.4804 3.10541 11.2929 3.29295C11.1054 3.48048 11 3.73484 11 4.00005C11 4.26527 11.1054 4.51962 11.2929 4.70716C11.4804 4.8947 11.7348 5.00005 12 5.00005C12.2652 5.00005 12.5196 4.8947 12.7071 4.70716C12.8946 4.51962 13 4.26527 13 4.00005C13 3.73484 12.8946 3.48048 12.7071 3.29295C12.5196 3.10541 12.2652 3.00005 12 3.00005ZM11 17.0001V15.0001H7V17.0001H11ZM13 13.0001V11.0001H7V13.0001H13ZM17 9.00005V7.00005H7V9.00005H17ZM17 16.0001L22 19.0001L17 22.0001V16.0001Z" />
    </Svg>
  );
};
