import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterPumpOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5.70011 2.50047C6.05953 2.18342 6.52086 2.00599 7.00011 2.00047H9.00011C9.53054 2.00047 10.0392 2.21118 10.4143 2.58626C10.7894 2.96133 11.0001 3.47004 11.0001 4.00047V5.00047H19.0001C19.5305 5.00047 20.0392 5.21118 20.4143 5.58626C20.7894 5.96133 21.0001 6.47004 21.0001 7.00047V11.0005C21.2653 11.0005 21.5197 11.1058 21.7072 11.2934C21.8948 11.4809 22.0001 11.7353 22.0001 12.0005C22.0001 12.2657 21.8948 12.52 21.7072 12.7076C21.5197 12.8951 21.2653 13.0005 21.0001 13.0005H17.0001C16.7349 13.0005 16.4805 12.8951 16.293 12.7076C16.1055 12.52 16.0001 12.2657 16.0001 12.0005C16.0001 11.7353 16.1055 11.4809 16.293 11.2934C16.4805 11.1058 16.7349 11.0005 17.0001 11.0005V9.00047H12.2001L5.70011 2.50047ZM20.8401 22.7305L22.1101 21.4605L11.0001 10.3405L2.39011 1.73047L1.11011 3.00047L3.65011 5.54047C3.35828 5.81366 3.15501 6.16804 3.06653 6.55787C2.97805 6.9477 3.00842 7.35511 3.15373 7.72751C3.29903 8.09992 3.5526 8.42023 3.88171 8.64714C4.21082 8.87404 4.60037 8.99711 5.00011 9.00047V18.0005H4.00011C3.46967 18.0005 2.96097 18.2112 2.58589 18.5863C2.21082 18.9613 2.00011 19.47 2.00011 20.0005V22.0005H14.0001V20.0005C14.0001 19.47 13.7894 18.9613 13.4143 18.5863C13.0392 18.2112 12.5305 18.0005 12.0001 18.0005H11.0001V12.8905L20.8401 22.7305Z" />
    </Svg>
  );
};
