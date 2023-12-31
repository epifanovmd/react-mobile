import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CogStopIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.5301 22H10.0001C9.75008 22 9.54008 21.82 9.50008 21.58L9.13008 18.93C8.50008 18.68 7.96008 18.34 7.44008 17.94L4.95008 18.95C4.73008 19.03 4.46008 18.95 4.34008 18.73L2.34008 15.27C2.21008 15.05 2.27008 14.78 2.46008 14.63L4.57008 12.97C4.53008 12.65 4.50008 12.33 4.50008 12C4.50008 11.67 4.53008 11.34 4.57008 11L2.46008 9.37C2.27008 9.22 2.21008 8.95 2.34008 8.73L4.34008 5.27C4.46008 5.05 4.73008 4.96 4.95008 5.05L7.44008 6.05C7.96008 5.66 8.50008 5.32 9.13008 5.07L9.50008 2.42C9.54008 2.18 9.75008 2 10.0001 2H14.0001C14.2501 2 14.4601 2.18 14.5001 2.42L14.8701 5.07C15.5001 5.32 16.0401 5.66 16.5601 6.05L19.0501 5.05C19.2701 4.96 19.5401 5.05 19.6601 5.27L21.6601 8.73C21.7801 8.95 21.7301 9.22 21.5401 9.37L19.4301 11C19.4701 11.34 19.5001 11.67 19.5001 12C19.5001 12.06 19.5001 12.12 19.5001 12.19C19.0001 12.07 18.5001 12 18.0001 12C17.0801 12 16.2201 12.21 15.4401 12.58C15.4701 12.39 15.5001 12.2 15.5001 12C15.5001 10.07 13.9301 8.5 12.0001 8.5C10.0701 8.5 8.50008 10.07 8.50008 12C8.50008 13.93 10.0701 15.5 12.0001 15.5C12.2001 15.5 12.3901 15.47 12.5801 15.44C12.2101 16.22 12.0001 17.08 12.0001 18C12.0001 19.54 12.5801 20.94 13.5301 22ZM21.0001 15H15.0001V21H21.0001V15Z" />
    </Svg>
  );
};
