import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardWirelessOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 11.0005H6C5.46957 11.0005 4.96086 11.2112 4.58579 11.5863C4.21071 11.9613 4 12.47 4 13.0005V21.0005C4 21.5309 4.21071 22.0396 4.58579 22.4147C4.96086 22.7898 5.46957 23.0005 6 23.0005H18C18.5304 23.0005 19.0391 22.7898 19.4142 22.4147C19.7893 22.0396 20 21.5309 20 21.0005V13.0005C20 12.47 19.7893 11.9613 19.4142 11.5863C19.0391 11.2112 18.5304 11.0005 18 11.0005ZM18 21.0005H6V17.0005H18V21.0005ZM18 15.0005H6V13.0005H18V15.0005ZM4.93 4.92047L6.34 6.33047C9.46 3.20047 14.53 3.20047 17.66 6.33047L19.07 4.92047C15.17 1.00047 8.84 1.00047 4.93 4.92047ZM7.76 7.75047L9.17 9.16047C10.73 7.60047 13.26 7.60047 14.83 9.16047L16.24 7.75047C13.9 5.41047 10.1 5.41047 7.76 7.75047Z" />
    </Svg>
  );
};
