import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerPlugOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L6.25011 8.14047C6.10011 8.41047 6.00011 8.70047 6.00011 9.00047V14.5005L9.50011 18.0005V21.0005H14.5001V18.0005L15.3101 17.2005L20.8401 22.7305L22.1101 21.4605ZM13.0901 16.5905L12.6701 17.0005H11.3301L10.9201 16.5905L8.00011 13.6705V9.89047L13.8901 15.7805L13.0901 16.5905ZM12.2001 9.00047L10.2001 7.00047H14.0001V3.00047H16.0001V7.00047C17.0001 7.00047 18.0001 8.00047 18.0001 9.00047V14.5005L17.8501 14.6505L16.0001 12.8005V9.09047C16.0001 9.06047 15.9501 9.00047 15.9201 9.00047H12.2001ZM10.0001 6.80047L8.00011 4.80047V3.00047H10.0001V6.80047Z" />
    </Svg>
  );
};
