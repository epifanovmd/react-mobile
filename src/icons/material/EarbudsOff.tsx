import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarbudsOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.99999 9.34047L11.56 10.9105V10.9005L14.1 13.4505L14.09 13.4405L15.58 14.9305H15.59L18.5 17.8405V17.8505L22.11 21.4605L20.84 22.7305L18.43 20.3305C18.3 20.7205 17.94 21.0005 17.5 21.0005H15.5C14.95 21.0005 14.5 20.5505 14.5 20.0005V16.3905L9.99999 11.8905V20.0005C9.99999 20.5505 9.54998 21.0005 8.99999 21.0005H7.99999C7.44999 21.0005 6.99999 20.5505 6.99999 20.0005V13.2705C6.31999 13.7205 5.60999 14.0005 4.99999 14.0005C2.99999 14.0005 1.99999 12.0005 1.99999 11.0005V6.00047C1.99999 5.58047 2.18999 5.00047 2.54999 4.43047L1.10999 3.00047L2.38999 1.73047L6.09999 5.44047L9.99999 9.34047ZM22 8.50047C22 5.46047 19.54 3.00047 16.5 3.00047C13.69 3.00047 11.37 5.12047 11.04 7.84047L17.16 13.9605C19.89 13.6305 22 11.3205 22 8.50047Z" />
    </Svg>
  );
};
