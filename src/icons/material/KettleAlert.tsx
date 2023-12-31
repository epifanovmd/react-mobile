import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KettleAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.5 3C4.8 3 1 5.7 1 9C1 10.2 1.5 11.3 2.4 12.3C1.5 13.5 1 15 1 16.5V20C1 21.1 1.9 22 3 22H16C17.1 22 18 21.1 18 20V16.5C18 15.3 17.7 14.1 17 13L19 11L16 8L13.9 10.1C12.6 9.4 11.1 9 9.5 9C7.7 9 5.9 9.5 4.6 10.4C4.2 10 4 9.5 4 9C4 7.2 6.5 5.8 9.5 5.8C10.9 5.8 12.3 6.1 13.3 6.7L15.3 4.7C13.8 3.6 11.7 3 9.5 3ZM9.5 11C9.8 11 10.2 11 10.5 11.1C7.4 11.6 5 14.2 5 17.5V20H3V17.5C3 13.9 5.9 11 9.5 11ZM21 13V7H23V13H21ZM21 17V15H23V17H21Z" />
    </Svg>
  );
};
