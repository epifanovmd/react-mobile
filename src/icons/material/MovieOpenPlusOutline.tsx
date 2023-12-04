import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenPlusOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.7501 7.45969L12.0001 3.92969L13.9701 3.53969L16.7101 7.06969L14.7501 7.45969ZM21.6201 6.09969L20.8401 2.17969L16.9101 2.95969L19.6501 6.49969L21.6201 6.09969ZM4.00008 19.9997V11.9997H20.0001V13.0897C20.7201 13.2097 21.3901 13.4597 22.0001 13.8097V9.99969H2.00008V19.9997C2.00008 21.1097 2.90008 21.9997 4.00008 21.9997H13.8101C13.4601 21.3897 13.2201 20.7197 13.0901 19.9997H4.00008ZM11.8101 8.04969L9.07008 4.49969L7.10008 4.90969L9.85008 8.43969L11.8101 8.04969ZM4.16008 5.49969L3.18008 5.68969C2.10008 5.89969 1.39008 6.95969 1.61008 8.03969L2.00008 9.99969L6.90008 9.02969L4.16008 5.49969ZM20.0001 17.9997V14.9997H18.0001V17.9997H15.0001V19.9997H18.0001V22.9997H20.0001V19.9997H23.0001V17.9997H20.0001Z" />
    </Svg>
  );
};
