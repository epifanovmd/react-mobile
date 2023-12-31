import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoomGateIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 9.00023H8.22C7.11 7.77023 5.21 7.68023 4 8.80023C3.36 9.36023 3 10.1602 3 11.0002V20.0002C2.73478 20.0002 2.48043 20.1056 2.29289 20.2931C2.10536 20.4807 2 20.735 2 21.0002V22.0002H10V21.0002C10 20.735 9.89464 20.4807 9.70711 20.2931C9.51957 20.1056 9.26522 20.0002 9 20.0002V13.0002H20C20.5304 13.0002 21.0391 12.7895 21.4142 12.4144C21.7893 12.0394 22 11.5307 22 11.0002C22 10.4698 21.7893 9.96109 21.4142 9.58601C21.0391 9.21094 20.5304 9.00023 20 9.00023ZM6 12.5002C5.60218 12.5002 5.22064 12.3422 4.93934 12.0609C4.65804 11.7796 4.5 11.3981 4.5 11.0002C4.5 10.6024 4.65804 10.2209 4.93934 9.93957C5.22064 9.65826 5.60218 9.50023 6 9.50023C6.39782 9.50023 6.77936 9.65826 7.06066 9.93957C7.34196 10.2209 7.5 10.6024 7.5 11.0002C7.5 11.3981 7.34196 11.7796 7.06066 12.0609C6.77936 12.3422 6.39782 12.5002 6 12.5002ZM10.5 12.0002L9 10.0002H10.5L12 12.0002H10.5ZM14.5 12.0002L13 10.0002H14.5L16 12.0002H14.5ZM18.5 12.0002L17 10.0002H18.5L20 12.0002H18.5Z" />
    </Svg>
  );
};
