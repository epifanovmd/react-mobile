import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarbudsOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.4605L18.5 17.8505V17.8405L15.58 14.9305L14.09 13.4405H14.1L11.56 10.9005L9.99999 9.34047L6.99999 6.34047L6.65999 6.00047H6.66999L6.09999 5.44047L2.38999 1.73047L1.10999 3.00047L2.54999 4.43047C2.18999 5.00047 1.99999 5.58047 1.99999 6.00047V11.0005C1.99999 12.0005 2.99999 14.0005 4.99999 14.0005C5.60999 14.0005 6.31999 13.7205 6.99999 13.2705V20.0005C6.99999 20.5505 7.44999 21.0005 7.99999 21.0005H8.99999C9.54998 21.0005 9.99999 20.5505 9.99999 20.0005V11.8905L14.5 16.3905V20.0005C14.5 20.5505 14.95 21.0005 15.5 21.0005H17.5C17.94 21.0005 18.3 20.7205 18.43 20.3205L20.84 22.7305L22.11 21.4605ZM7.99999 10.2305L5.90999 11.6005C5.39999 11.9305 5.07999 12.0005 4.99999 12.0005C4.29999 12.0005 3.99999 11.0805 3.99999 11.0005V6.03047C3.99999 6.00047 3.99999 5.97047 4.02999 5.92047L7.99999 9.89047V10.2305ZM13.53 10.3305L11.04 7.84047C11.37 5.12047 13.69 3.00047 16.5 3.00047C19.54 3.00047 22 5.46047 22 8.50047C22 11.3205 19.89 13.6305 17.16 13.9605L14.67 11.4705C15.2 11.8005 15.83 12.0005 16.5 12.0005C18.43 12.0005 20 10.4305 20 8.50047C20 6.57047 18.43 5.00047 16.5 5.00047C14.57 5.00047 13 6.57047 13 8.50047C13 9.17047 13.2 9.80047 13.53 10.3305Z" />
    </Svg>
  );
};
