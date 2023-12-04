import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M0.930054 4.19969L2.21005 2.92969L20.0001 20.7197L18.7301 21.9997L16.7301 19.9997H4.00005C2.89005 19.9997 2.00005 19.0997 2.00005 17.9997V5.99969C2.00005 5.77969 2.04005 5.56969 2.11005 5.37969L0.930054 4.19969ZM20.0001 7.99969V5.99969H7.82005L5.82005 3.99969H20.0001C20.5305 3.99969 21.0392 4.2104 21.4143 4.58547C21.7893 4.96055 22.0001 5.46925 22.0001 5.99969V17.9997C22.0001 18.5997 21.7401 19.1297 21.3201 19.4997L19.8201 17.9997H20.0001V11.9997H13.8201L9.82005 7.99969H20.0001ZM4.00005 7.99969H4.73005L4.00005 7.26969V7.99969ZM4.00005 11.9997V17.9997H14.7301L8.73005 11.9997H4.00005Z" />
    </Svg>
  );
};
