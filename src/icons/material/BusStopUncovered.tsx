import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BusStopUncoveredIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 21.9998V18.9998H4V21.9998H2V13.9998C2 13.7346 2.10536 13.4802 2.29289 13.2927C2.48043 13.1051 2.73478 12.9998 3 12.9998C3.26522 12.9998 3.51957 13.1051 3.70711 13.2927C3.89464 13.4802 4 13.7346 4 13.9998V16.9998H7C7.26522 16.9998 7.51957 17.1051 7.70711 17.2927C7.89464 17.4802 8 17.7346 8 17.9998V21.9998H6ZM20 10.9998V21.9998H19V10.9998C18.393 10.8759 17.8536 10.531 17.4864 10.032C17.1192 9.53299 16.9504 8.91542 17.0127 8.29902C17.0749 7.68262 17.3639 7.1113 17.8234 6.69581C18.283 6.28033 18.8805 6.05029 19.5 6.05029C20.1195 6.05029 20.717 6.28033 21.1766 6.69581C21.6361 7.1113 21.9251 7.68262 21.9873 8.29902C22.0496 8.91542 21.8808 9.53299 21.5136 10.032C21.1464 10.531 20.607 10.8759 20 10.9998ZM15 11.5498V15.9998H14V21.9998H12.5V16.9998H11.5V21.9998H10V15.9998H9V11.4998C9 11.102 9.15804 10.7204 9.43934 10.4391C9.72064 10.1578 10.1022 9.99978 10.5 9.99978H13.5C13.8978 9.99978 14.2794 10.1578 14.5607 10.4391C14.842 10.7204 15 11.102 15 11.4998V11.5498ZM12 6.54978C11.7012 6.54995 11.4093 6.63933 11.1617 6.80647C10.914 6.97361 10.722 7.21089 10.61 7.48791C10.4981 7.76492 10.4715 8.06905 10.5335 8.3613C10.5956 8.65355 10.7435 8.92062 10.9583 9.12826C11.1731 9.33591 11.445 9.47469 11.7392 9.52679C12.0334 9.5789 12.3365 9.54197 12.6095 9.42073C12.8826 9.2995 13.1132 9.09948 13.2719 8.84632C13.4305 8.59315 13.51 8.29838 13.5 7.99978C13.5 7.60196 13.342 7.22043 13.0607 6.93912C12.7794 6.65782 12.3978 6.49978 12 6.49978V6.54978Z" />
    </Svg>
  );
};
