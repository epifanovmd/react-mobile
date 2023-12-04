import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenEditOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.7501 7.45969L12.0001 3.92969L13.9701 3.53969L16.7101 7.06969L14.7501 7.45969ZM21.6201 6.09969L20.8401 2.17969L16.9101 2.95969L19.6501 6.49969L21.6201 6.09969ZM4.00008 11.9997H18.1301L20.1301 9.99969H2.00008V19.9997C2.00008 21.1097 2.90008 21.9997 4.00008 21.9997H11.0001V19.9997H4.00008V11.9997ZM11.8101 8.04969L9.07008 4.49969L7.10008 4.90969L9.85008 8.43969L11.8101 8.04969ZM4.16008 5.49969L3.18008 5.68969C2.10008 5.89969 1.39008 6.95969 1.61008 8.03969L2.00008 9.99969L6.90008 9.02969L4.16008 5.49969ZM13.0001 19.9597V21.9997H15.0401L21.1701 15.8797L19.1301 13.8297L13.0001 19.9597ZM22.8501 13.4697L21.5301 12.1497C21.3301 11.9497 21.0001 11.9497 20.8101 12.1497L19.8301 13.1297L21.8701 15.1697L22.8501 14.1897C23.0501 13.9997 23.0501 13.6697 22.8501 13.4697Z" />
    </Svg>
  );
};
