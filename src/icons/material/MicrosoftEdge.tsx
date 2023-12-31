import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftEdgeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.8599 15.3694C10.1699 14.5994 9.69993 13.6794 9.54993 12.6494C9.24993 13.1094 8.99993 13.6094 8.81993 14.1494C7.89993 16.8994 9.49993 20.3294 12.2199 21.3294C14.5599 22.1094 17.1899 20.7194 18.9199 19.1994C19.1799 18.8494 21.2299 17.0394 20.2099 16.8394C17.1899 18.3894 13.1899 17.9494 10.8599 15.3694ZM11.4599 9.55944C12.4999 9.54944 11.4999 9.12944 11.0699 8.80944C10.0299 8.23944 8.80993 7.95944 7.62993 7.95944C3.77993 7.99944 0.994931 10.4094 2.29993 14.3994C3.23993 18.2794 6.60993 21.3994 10.5899 21.8994C8.53993 20.6094 7.29993 18.1894 7.29993 15.7794C7.37993 13.2494 8.93993 10.2794 11.4599 9.55944ZM2.77993 8.23944C5.81993 5.99944 10.6599 6.17944 13.2799 8.99944C14.2999 10.1094 14.9999 11.9994 14.0699 13.3694C12.3299 15.2494 17.1499 15.4994 18.1799 15.2194C21.9199 14.4994 22.9099 10.1494 21.1299 7.14944C19.4299 3.74944 15.6599 1.96944 11.9599 1.99944C7.89993 1.92944 4.24993 4.49944 2.77993 8.23944Z" />
    </Svg>
  );
};
