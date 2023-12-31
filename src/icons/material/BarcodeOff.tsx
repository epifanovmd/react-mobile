import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BarcodeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.73L16.0001 17.89V18H14.0001V15.89L12.0001 13.89V18H11.0001V12.89L10.0001 11.89V18H7.00011V8.88998L6.00011 7.88998V18H5.00011V6.88998L1.11011 2.99998L2.39011 1.72998L7.00011 6.33998L10.0001 9.33998L11.0001 10.34L12.0001 11.34L14.0001 13.35V13.34L16.0001 15.34V15.35L17.0001 16.35V16.34L18.6601 18H18.6501L22.1101 21.46L20.8401 22.73ZM16.0001 5.99998H14.0001V10.8L16.0001 12.8V5.99998ZM12.0001 5.99998H11.0001V7.79998L12.0001 8.79998V5.99998ZM20.0001 5.99998H17.0001V13.8L20.0001 16.8V5.99998ZM22.0001 18V5.99998H21.0001V17.8L21.2001 18H22.0001ZM10.0001 5.99998H9.20011L10.0001 6.79998V5.99998ZM2.00011 18H4.00011V5.99998H2.00011V18Z" />
    </Svg>
  );
};
