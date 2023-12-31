import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftInternetExplorerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 3.00058L14 3.06058C16.8 1.79058 19.23 1.64058 20.5 2.92058C21.5 3.93058 21.58 5.67058 20.92 7.72058C21.61 9.00058 22 10.4506 22 12.0006L21.95 13.0006H9.08003C9.45003 15.2806 11.06 17.0006 13 17.0006C14.31 17.0006 15.47 16.2106 16.2 15.0006H21.5C20.25 18.5006 16.92 21.0006 13 21.0006C11.72 21.0006 10.5 20.7306 9.41003 20.2506C6.50003 21.6806 3.89003 21.9006 2.57003 20.5606C1.00003 18.9606 1.68003 15.5706 4.00003 12.0006C4.93003 10.5406 6.14003 9.06058 7.57003 7.65058L8.38003 6.88058C7.21003 7.57058 5.71003 8.62058 4.19003 10.1706C5.03003 6.08058 8.66003 3.00058 13 3.00058ZM13 7.00058C11.21 7.00058 9.69003 8.47058 9.18003 10.5006H16.82C16.31 8.47058 14.79 7.00058 13 7.00058ZM20.06 4.06058C19.4 3.39058 18.22 3.35058 16.74 3.81058C18.22 4.50058 19.5 5.56058 20.41 6.89058C20.73 5.65058 20.64 4.65058 20.06 4.06058ZM3.89003 20.0006C4.72003 20.8406 6.40003 20.6906 8.44003 19.7606C6.59003 18.6706 5.17003 16.9406 4.47003 14.8806C3.27003 17.1506 3.00003 19.0706 3.89003 20.0006Z" />
    </Svg>
  );
};
