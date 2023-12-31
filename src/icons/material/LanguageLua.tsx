import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageLuaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.5 5C8.24566 5 6.08365 5.89553 4.48959 7.48959C2.89553 9.08365 2 11.2457 2 13.5C2 15.7543 2.89553 17.9163 4.48959 19.5104C6.08365 21.1045 8.24566 22 10.5 22C11.6162 22 12.7215 21.7801 13.7528 21.353C14.7841 20.9258 15.7211 20.2997 16.5104 19.5104C17.2997 18.7211 17.9258 17.7841 18.353 16.7528C18.7801 15.7215 19 14.6162 19 13.5C19 11.2457 18.1045 9.08365 16.5104 7.48959C14.9163 5.89553 12.7543 5 10.5 5ZM13.5 13C12.837 13 12.2011 12.7366 11.7322 12.2678C11.2634 11.7989 11 11.163 11 10.5C11 9.83696 11.2634 9.20107 11.7322 8.73223C12.2011 8.26339 12.837 8 13.5 8C14.163 8 14.7989 8.26339 15.2678 8.73223C15.7366 9.20107 16 9.83696 16 10.5C16 11.163 15.7366 11.7989 15.2678 12.2678C14.7989 12.7366 14.163 13 13.5 13ZM19.5 2C18.837 2 18.2011 2.26339 17.7322 2.73223C17.2634 3.20107 17 3.83696 17 4.5C17 5.16304 17.2634 5.79893 17.7322 6.26777C18.2011 6.73661 18.837 7 19.5 7C19.8283 7 20.1534 6.93534 20.4567 6.8097C20.76 6.68406 21.0356 6.49991 21.2678 6.26777C21.4999 6.03562 21.6841 5.76002 21.8097 5.45671C21.9353 5.15339 22 4.8283 22 4.5C22 3.83696 21.7366 3.20107 21.2678 2.73223C20.7989 2.26339 20.163 2 19.5 2Z" />
    </Svg>
  );
};
