import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DishwasherOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L4.00011 5.89047V20.0005C4.00011 21.1105 4.89011 22.0005 6.00011 22.0005H18.0001C18.5801 22.0005 19.1001 21.7505 19.4601 21.3505L20.8401 22.7305L22.1101 21.4605ZM18.0001 20.0005H6.00011V8.00047H6.11011L10.5001 12.3705C10.3101 12.6905 10.1501 13.0005 10.0001 13.3305C9.63011 13.9405 9.40011 14.6205 9.33011 15.3305C9.31011 16.0305 9.59011 16.7105 10.0901 17.2105C11.1501 18.2705 12.8601 18.2605 13.9101 17.2105C14.1601 16.9705 14.3501 16.6805 14.5001 16.3605L18.0001 19.8905V20.0005ZM11.2001 8.00047H18.0001V14.8005L20.0001 16.8005V4.00047C20.0001 2.90047 19.1101 2.00047 18.0001 2.00047H6.00011C5.76011 2.00047 5.54011 2.05047 5.33011 2.13047L11.2001 8.00047ZM10.0001 4.00047C10.5501 4.00047 11.0001 4.45047 11.0001 5.00047C11.0001 5.55047 10.5501 6.00047 10.0001 6.00047C9.45011 6.00047 9.00011 5.55047 9.00011 5.00047C9.00011 4.45047 9.45011 4.00047 10.0001 4.00047Z" />
    </Svg>
  );
};
