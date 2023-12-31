import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZigbeeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.06 6.15C3.97 6.17 3.88 6.22 3.8 6.28C2.66 7.9 2 9.87 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C15 22 17.68 20.68 19.5 18.6L17 18.85C14.25 19.15 11.45 19.19 8.66 18.96C7.95 18.94 7.24 18.76 6.59 18.45C5.73 18.06 5.15 17.23 5.07 16.29C5.06 16.13 5.12 16 5.23 15.87L7.42 13.6L15.03 5.7V5.6H10.84C8.57 5.64 6.31 5.82 4.06 6.15ZM20.17 17.5C20.26 17.47 20.35 17.44 20.43 17.39C21.42 15.83 22 14 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C9.22 2 6.7 3.13 4.89 4.97H5.17C8.28 4.57 11.43 4.47 14.56 4.65C15.5 4.64 16.45 4.82 17.33 5.17C18.25 5.53 18.89 6.38 19 7.37C19 7.53 18.93 7.7 18.82 7.82L9.71 17.19L9 17.95V18.06H13.14C15.5 18 17.84 17.81 20.17 17.5Z" />
    </Svg>
  );
};
