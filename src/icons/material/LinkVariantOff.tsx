import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LinkVariantOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 5.27031L3.28 4.00031L20 20.7203L18.73 22.0003L13.9 17.1703L11.29 19.7803C9.34 21.7303 6.17 21.7303 4.22 19.7803C2.27 17.8303 2.27 14.6603 4.22 12.7103L5.71 11.2203C5.7 12.0403 5.83 12.8603 6.11 13.6503L5.64 14.1203C4.46 15.2903 4.46 17.1903 5.64 18.3603C6.81 19.5403 8.71 19.5403 9.88 18.3603L12.5 15.7603L10.88 14.1503C10.87 14.3903 10.77 14.6403 10.59 14.8303C10.2 15.2203 9.56 15.2203 9.17 14.8303C8.12 13.7703 7.63 12.3703 7.72 11.0003L2 5.27031ZM12.71 4.22031C14.66 2.27031 17.83 2.27031 19.78 4.22031C21.73 6.17031 21.73 9.34031 19.78 11.2903L18.29 12.7803C18.3 11.9603 18.17 11.1403 17.89 10.3603L18.36 9.88031C19.54 8.71031 19.54 6.81031 18.36 5.64031C17.19 4.46031 15.29 4.46031 14.12 5.64031L10.79 8.97031L9.38 7.55031L12.71 4.22031ZM13.41 9.17031C13.8 8.78031 14.44 8.78031 14.83 9.17031C16.2 10.5403 16.61 12.5003 16.06 14.2303L14.28 12.4603C14.23 11.7803 13.94 11.1103 13.41 10.5903C13 10.2003 13 9.56031 13.41 9.17031Z" />
    </Svg>
  );
};
