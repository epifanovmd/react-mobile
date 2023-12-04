import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SalesforceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.38 6.36977C17.68 6.36977 17.07 6.57977 16.47 6.77977C15.77 5.56977 14.46 4.76977 13.05 4.76977C11.95 4.76977 10.95 5.26977 10.24 5.96977C9.44 4.96977 8.23 4.25977 6.83 4.25977C4.5 4.25977 2.5 6.16977 2.5 8.49977C2.5 9.08977 2.71 9.68977 2.91 10.2898C1.8 10.8998 1 12.0998 1 13.4998C1 15.4998 2.61 17.2198 4.62 17.2198C4.92 17.2198 5.22 17.2198 5.42 17.1198C5.82 18.6298 7.33 19.7398 9.14 19.7398C10.84 19.7398 12.25 18.7298 12.75 17.3198C13.26 17.5298 13.76 17.7298 14.26 17.7298C15.57 17.7298 16.77 16.9998 17.37 15.9198C17.68 15.9998 18 15.9998 18.28 15.9998C20.89 15.9998 23 13.9098 23 11.1998C23.1 8.49977 21 6.36977 18.38 6.36977Z" />
    </Svg>
  );
};
