import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.20011 5.00047L6.20011 3.00047H17.0001L21.0001 7.00047V17.8005L19.0001 15.8005V7.83047L16.1701 5.00047H8.20011ZM15.0001 10.0005V6.00047H9.20011L13.2001 10.0005H15.0001ZM22.1101 21.4605L20.8401 22.7305L19.1001 21.0005C19.0701 21.0005 19.0301 21.0005 19.0001 21.0005H5.00011C3.89011 21.0005 3.00011 20.1005 3.00011 19.0005V5.00047C3.00011 4.97047 3.00011 4.93047 3.00011 4.90047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM17.1101 19.0005L14.5901 16.5005C14.0801 17.3905 13.1201 18.0005 12.0001 18.0005C10.3401 18.0005 9.00011 16.6605 9.00011 15.0005C9.00011 13.8805 9.61011 12.9205 10.5001 12.4105L8.11011 10.0005H6.00011V7.89047L5.00011 6.89047V19.0005H17.1101Z" />
    </Svg>
  );
};
