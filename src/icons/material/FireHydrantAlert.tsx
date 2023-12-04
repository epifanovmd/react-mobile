import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireHydrantAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 7H20V13H22V7ZM22 15H20V17H22V15ZM3 15V14H2V12H3V11H5V15H3ZM17 12V11H15V15H17V14H18V12H17ZM16 6H13.86C13.5 4.6 12.4 3.5 11 3.14V2H9V3.14C7.6 3.5 6.5 4.6 6.14 6H4V8H16V6ZM16 22H4C4 20.9 4.89 20 6 20V9H14V20C15.11 20 16 20.9 16 22ZM8 13C8 14.11 8.9 15 10 15C11.1 15 12 14.11 12 13C12 11.89 11.11 11 10 11C8.89 11 8 11.9 8 13Z" />
    </Svg>
  );
};
