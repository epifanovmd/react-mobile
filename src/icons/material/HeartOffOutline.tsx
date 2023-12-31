import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeartOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.38999 1.73047L1.10999 3.00047L3.18999 5.08047C2.44999 6.00047 1.99999 7.19047 1.99999 8.50047C1.99999 12.2705 5.39999 15.3605 10.55 20.0305L12 21.3505L13.45 20.0305C14.32 19.2405 15.14 18.5005 15.9 17.7905L20 22.0005L21.27 20.7305L2.38999 1.73047ZM12.1 18.5505L12 18.6505L11.89 18.5505C7.13999 14.2405 3.99999 11.3905 3.99999 8.50047C3.99999 7.74047 4.21999 7.06047 4.60999 6.50047L14.5 16.3705C13.74 17.0605 12.95 17.7805 12.1 18.5505ZM8.29999 5.10047L6.32999 3.13047C6.69999 3.05047 7.09999 3.00047 7.49999 3.00047C9.23999 3.00047 10.91 3.81047 12 5.08047C13.09 3.81047 14.76 3.00047 16.5 3.00047C19.58 3.00047 22 5.41047 22 8.50047C22 10.8405 20.69 12.9205 18.47 15.2705L17.06 13.8605C18.91 11.8805 20 10.2005 20 8.50047C20 6.50047 18.5 5.00047 16.5 5.00047C15.1 5.00047 13.74 5.83047 13.11 7.00047H10.89C10.38 6.06047 9.38999 5.34047 8.29999 5.10047Z" />
    </Svg>
  );
};
