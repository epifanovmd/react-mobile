import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PrinterWirelessIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.93 3.92047L6.34 5.33047C9.46 2.20047 14.53 2.20047 17.66 5.33047L19.07 3.92047C15.17 0.000468731 8.84 0.000468731 4.93 3.92047ZM7.76 6.75047L9.17 8.16047C10.73 6.60047 13.26 6.60047 14.83 8.16047L16.24 6.75047C13.9 4.41047 10.1 4.41047 7.76 6.75047ZM19 14.0005C18.7348 14.0005 18.4804 13.8951 18.2929 13.7076C18.1054 13.52 18 13.2657 18 13.0005C18 12.7353 18.1054 12.4809 18.2929 12.2934C18.4804 12.1058 18.7348 12.0005 19 12.0005C19.2652 12.0005 19.5196 12.1058 19.7071 12.2934C19.8946 12.4809 20 12.7353 20 13.0005C20 13.2657 19.8946 13.52 19.7071 13.7076C19.5196 13.8951 19.2652 14.0005 19 14.0005ZM16 20.0005H8V15.0005H16V20.0005ZM19 10.0005H5C4.20435 10.0005 3.44129 10.3165 2.87868 10.8791C2.31607 11.4418 2 12.2048 2 13.0005V18.0005H6V22.0005H18V18.0005H22V13.0005C22 12.2048 21.6839 11.4418 21.1213 10.8791C20.5587 10.3165 19.7956 10.0005 19 10.0005Z" />
    </Svg>
  );
};
