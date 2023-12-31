import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.07 15.8705C19.66 15.3105 20 14.6805 20 14.0005V16.8005L19.07 15.8705ZM20 9.00047C20 10.5405 18.27 11.8605 15.73 12.5305L17.89 14.6905C19.19 14.0005 20 13.0405 20 12.0005V9.00047ZM20 7.00047C20 4.79047 16.42 3.00047 12 3.00047C10.13 3.00047 8.41999 3.33047 7.05999 3.86047L14.06 10.8605C17.5 10.4105 20 8.85047 20 7.00047ZM2.38999 1.73047L1.10999 3.00047L4.20999 6.10047C4.07999 6.39047 3.99999 6.69047 3.99999 7.00047C3.99999 8.63047 5.95999 10.0405 8.76999 10.6605L11.08 12.9705C7.09999 12.7405 3.99999 11.0605 3.99999 9.00047V12.0005C3.99999 14.2105 7.57999 16.0005 12 16.0005C12.69 16.0005 13.35 15.9505 14 15.8705L15.66 17.5505C14.57 17.8405 13.32 18.0005 12 18.0005C7.57999 18.0005 3.99999 16.2105 3.99999 14.0005V17.0005C3.99999 19.2105 7.57999 21.0005 12 21.0005C14.31 21.0005 16.38 20.5005 17.84 19.7305L20.84 22.7305L22.11 21.4605L2.38999 1.73047Z" />
    </Svg>
  );
};
