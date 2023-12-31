import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HatFedoraIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.11 11.9206C19.13 11.7106 19.14 11.5006 19.14 11.2906C19.14 7.86063 17.71 4.14062 16.28 4.14062C14.85 4.14062 13.42 5.57063 12 5.57063C10.57 5.57063 9.14 4.14062 7.71 4.14062C6.28 4.14062 4.86 7.79063 4.86 11.2906C4.86 11.5006 4.86 11.7106 4.88 11.9206C7.22 12.4506 9.6 12.7206 12 12.7106C14.45 12.7106 16.83 12.4406 19.11 11.9206ZM3.45 18.1806C9 19.8506 14.96 19.8606 20.54 18.1806C20.96 18.0406 21.33 17.7706 21.59 17.4106C21.85 17.0506 22 16.6106 22 16.1706C22 15.7206 21.86 15.2906 21.61 14.9206C21.35 14.5606 21 14.2906 20.56 14.1406C17.86 15.0006 15 15.4506 12 15.4506C9 15.4506 6.13 15.0006 3.43 14.1406C3 14.2906 2.65 14.5706 2.39 14.9306C2.14 15.2906 2 15.7206 2 16.1706C2 17.1106 2.61 17.9006 3.45 18.1806Z" />
    </Svg>
  );
};
