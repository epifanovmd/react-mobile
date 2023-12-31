import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbCflSpiralOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.45 9.90047L13.88 10.6805L12.38 9.18047L14.55 8.10047C14.69 8.03047 14.84 8.00047 15 8.00047C16 8.00047 16.42 9.34047 15.45 9.90047ZM11.22 8.00047L15.45 5.90047C16.41 5.43047 16 4.00047 15 4.00047C14.83 4.00047 14.69 4.03047 14.55 4.10047L9.71999 6.50047L11.22 8.00047ZM20.84 22.7305L16.09 18.0005H7.99999C7.43999 18.0005 6.99999 17.5505 6.99999 17.0005V14.0005H7.99999V12.0005C7.99999 11.6005 8.19999 11.2505 8.69999 11.0305L8.99999 10.8805L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM12.11 14.0005L10.5 12.3805L9.99999 12.6205V14.0005H12.11ZM8.99999 21.0005C8.99999 21.5705 9.45999 22.0005 9.99999 22.0005H14C14.56 22.0005 15 21.5505 15 21.0005V20.0005H8.99999V21.0005ZM8.99999 5.00047C9.15999 5.00047 9.31999 4.95047 9.44999 4.90047L11.45 3.90047C12.43 3.36047 12 2.00047 11 2.00047C10.84 2.00047 10.69 2.03047 10.55 2.10047L8.54999 3.10047C7.55999 3.66047 7.99999 5.00047 8.99999 5.00047Z" />
    </Svg>
  );
};
