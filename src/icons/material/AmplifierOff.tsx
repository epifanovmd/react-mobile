import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AmplifierOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.5L2.4001 1.69995L1.1001 2.99995L3.0001 4.89995V21H5.0001C5.0001 21.6 5.4001 22 6.0001 22C6.6001 22 7.0001 21.6 7.0001 21H17.0001C17.0001 21.6 17.4001 22 18.0001 22C18.6001 22 19.0001 21.6 19.0001 21H19.1001L20.8001 22.7L22.1001 21.5ZM5.0001 8.99995V6.89995L7.1001 8.99995H5.0001ZM12.0001 19C9.8001 19 8.0001 17.2 8.0001 15C8.0001 13.6 8.7001 12.4 9.8001 11.7L15.3001 17.2C14.6001 18.3 13.4001 19 12.0001 19ZM14.0001 5.99995V6.99995H12.0001V5.99995H14.0001ZM10.0001 5.99995C10.6001 5.99995 11.0001 6.39995 11.0001 6.99995C11.0001 7.19995 10.9001 7.39995 10.8001 7.59995L9.4001 6.19995C9.6001 6.09995 9.8001 5.99995 10.0001 5.99995ZM8.2001 4.99995L6.2001 2.99995H9.0001C9.0001 2.39995 9.4001 1.99995 10.0001 1.99995H14.0001C14.6001 1.99995 15.0001 2.39995 15.0001 2.99995H21.0001V17.7999L12.2001 8.99995H19.0001V4.99995H8.2001ZM16.0001 5.99995V7.99995H15.0001V5.99995H16.0001ZM18.0001 5.99995V7.99995H17.0001V5.99995H18.0001Z" />
    </Svg>
  );
};
