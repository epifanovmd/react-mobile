import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MushroomOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L4.1001 5.99922C2.8001 7.59922 2.0001 9.69922 2.0001 11.9992C2.0001 13.0992 2.9001 13.9992 4.0001 13.9992H12.1001L13.1001 14.9992H9.0001L7.7001 19.4992V19.9992C7.7001 21.0992 8.6001 21.9992 9.7001 21.9992H14.4001C15.5001 21.9992 16.4001 21.0992 16.4001 19.9992L16.3001 19.4992L15.8001 17.6992L20.9001 22.7992L22.1001 21.4992ZM7.0001 11.9992C5.9001 11.9992 5.0001 11.0992 5.0001 9.99922C5.0001 9.19922 5.5001 8.39922 6.3001 8.09922L8.9001 10.6992C8.6001 11.4992 7.8001 11.9992 7.0001 11.9992ZM10.0001 5.99922C10.0001 4.89922 10.9001 3.99922 12.0001 3.99922C13.1001 3.99922 14.0001 4.89922 14.0001 5.99922C14.0001 7.09922 13.1001 7.99922 12.0001 7.99922C11.5001 7.99922 11.1001 7.79922 10.7001 7.49922L17.2001 13.9992H20.0001C21.1001 13.9992 22.0001 13.0992 22.0001 11.9992C22.0001 6.49922 17.5001 1.99922 12.0001 1.99922C10.1001 1.99922 8.3001 2.59922 6.7001 3.49922L10.4001 7.19922C10.2001 6.89922 10.0001 6.49922 10.0001 5.99922ZM17.0001 7.99922C18.1001 7.99922 19.0001 8.89922 19.0001 9.99922C19.0001 11.0992 18.1001 11.9992 17.0001 11.9992C15.9001 11.9992 15.0001 11.0992 15.0001 9.99922C15.0001 8.89922 15.9001 7.99922 17.0001 7.99922Z" />
    </Svg>
  );
};
