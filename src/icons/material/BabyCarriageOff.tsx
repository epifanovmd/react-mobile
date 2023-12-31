import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyCarriageOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.0001 9.99995C22.0001 5.59995 18.4001 1.99995 14.0001 1.99995V9.99995H22.0001ZM14.2001 11H22.0001C22.0001 12.8 21.4001 14.5 20.3001 15.9C21.0001 16.5 21.4001 17.4 21.5001 18.2999L14.2001 11ZM20.8001 22.7L22.1001 21.4L2.4001 1.69995L1.1001 2.99995L9.1001 11H7.4001L6.5001 8.99995H3.0001V11H5.2001C5.2001 11 7.1001 15.1 7.3001 15.4C6.3001 15.9 5.6001 16.9 5.5001 18C5.2001 19.9 6.6001 21.7 8.5001 22C10.4001 22.2999 12.2001 20.9 12.5001 19H14.6001C14.7001 19.4 14.8001 19.8 15.0001 20.2C15.9001 21.9 18.1001 22.5 19.7001 21.6L20.8001 22.7ZM10.5001 18.5C10.5001 19.2999 9.8001 20 9.0001 20C8.2001 20 7.5001 19.2999 7.5001 18.5C7.5001 17.7 8.2001 17 9.0001 17C9.8001 17 10.5001 17.7 10.5001 18.5ZM18.1001 20C17.2001 20 16.5001 19.2999 16.5001 18.5V18.4L18.1001 20Z" />
    </Svg>
  );
};
