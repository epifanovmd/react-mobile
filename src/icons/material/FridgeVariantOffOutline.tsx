import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeVariantOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.20011 4.00047L5.70011 2.50047C6.05011 2.19047 6.50011 2.00047 7.00011 2.00047H17.0001C18.1101 2.00047 19.0001 2.90047 19.0001 4.00047V15.8005L17.0001 13.8005V4.00047H13.0001V9.80047L11.0001 7.80047V4.00047H7.20011ZM22.1101 21.4605L20.8401 22.7305L18.4601 20.3505C18.1001 20.7505 17.5801 21.0005 17.0001 21.0005V22.0005H15.0001V21.0005H9.00011V22.0005H7.00011V21.0005C5.90011 21.0005 5.00011 20.1105 5.00011 19.0005V6.89047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM7.00011 10.0005H8.11011L7.00011 8.89047V10.0005ZM11.0001 12.8905L10.0001 11.8905V14.0005H7.00011V19.0005H11.0001V12.8905ZM17.0001 18.8905L13.0001 14.8905V19.0005H17.0001V18.8905Z" />
    </Svg>
  );
};
