import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RouterWirelessOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.8001 5.89922L11.0001 5.09922C12.4001 3.69922 14.2001 2.99922 16.0001 2.99922C17.8001 2.99922 19.6001 3.69922 21.0001 5.09922L20.2001 5.89922C19.0001 4.79922 17.5001 4.19922 16.0001 4.19922C14.5001 4.19922 13.0001 4.79922 11.8001 5.89922ZM21.0001 14.9992C21.0001 13.8992 20.1001 12.9992 19.0001 12.9992H17.0001V8.99922H15.0001V11.7992L21.0001 17.7992V14.9992ZM18.5001 7.49922L19.3001 6.69922C18.4001 5.79922 17.2001 5.29922 16.0001 5.29922C14.8001 5.29922 13.6001 5.79922 12.7001 6.69922L13.5001 7.49922C14.2001 6.79922 15.1001 6.49922 16.0001 6.49922C16.9001 6.49922 17.8001 6.79922 18.5001 7.49922ZM22.1001 21.4992L20.8001 22.7992L19.1001 20.9992H5.0001C3.9001 20.9992 3.0001 20.0992 3.0001 18.9992V14.9992C3.0001 13.8992 3.9001 12.9992 5.0001 12.9992H11.1001L1.1001 2.99922L2.4001 1.69922L22.1001 21.4992ZM8.0001 15.9992H6.0001V17.9992H8.0001V15.9992ZM11.5001 15.9992H9.5001V17.9992H11.5001V15.9992ZM15.0001 16.8992L14.1001 15.9992H13.0001V17.9992H15.0001V16.8992Z" />
    </Svg>
  );
};
