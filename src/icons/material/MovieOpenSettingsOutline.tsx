import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenSettingsOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.6501 4.49969L16.9101 0.959687L20.8401 0.179688L21.6201 4.09969L19.6501 4.49969ZM16.7101 5.06969L13.9701 1.53969L12.0001 1.92969L14.7501 5.45969L16.7101 5.06969ZM11.8101 6.04969L9.07008 2.49969L7.10008 2.90969L9.85008 6.43969L11.8101 6.04969ZM4.16008 3.49969L3.18008 3.68969C2.10008 3.89969 1.39008 4.95969 1.61008 6.03969L2.00008 7.99969L6.90008 7.02969L4.16008 3.49969ZM22.0001 7.99969V17.9997C22.0001 19.1097 21.1101 19.9997 20.0001 19.9997H4.00008C2.90008 19.9997 2.00008 19.1097 2.00008 17.9997V7.99969H22.0001ZM20.0001 9.99969H4.00008V17.9997H20.0001V9.99969ZM7.00008 23.9997H9.00008V21.9997H7.00008V23.9997ZM15.0001 23.9997H17.0001V21.9997H15.0001V23.9997ZM11.0001 23.9997H13.0001V21.9997H11.0001V23.9997Z" />
    </Svg>
  );
};
