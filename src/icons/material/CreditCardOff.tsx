import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.2001 8.00047L7.20011 4.00047H20.0001C20.5305 4.00047 21.0392 4.21118 21.4143 4.58626C21.7894 4.96133 22.0001 5.47004 22.0001 6.00047V18.0005C22.0018 18.2325 21.9611 18.463 21.8801 18.6805L14.2001 11.0005H20.0001V8.00047H11.2001ZM20.8401 22.7305L18.1101 20.0005H4.00011C3.46967 20.0005 2.96097 19.7898 2.58589 19.4147C2.21082 19.0396 2.00011 18.5309 2.00011 18.0005V6.00047C2.00226 5.7255 2.0611 5.45393 2.17294 5.20272C2.28478 4.95152 2.44722 4.72607 2.65011 4.54047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM9.11011 11.0005L6.11011 8.00047H4.00011V11.0005H9.11011Z" />
    </Svg>
  );
};
