import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PartyPopperIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.53 1.44922L13.45 2.52922L15.05 4.12922C15.27 4.37922 15.38 4.66922 15.38 4.99922C15.38 5.32922 15.27 5.63922 15.05 5.85922L11.5 9.46922L12.5 10.5492L16.13 6.93922C16.66 6.34922 16.92 5.69922 16.92 4.99922C16.92 4.29922 16.66 3.63922 16.13 3.04922L14.53 1.44922ZM10.55 3.46922L9.47 4.54922L10.08 5.10922C10.3 5.32922 10.41 5.62922 10.41 5.99922C10.41 6.36922 10.3 6.66922 10.08 6.88922L9.47 7.44922L10.55 8.52922L11.11 7.91922C11.64 7.32922 11.91 6.68922 11.91 5.99922C11.91 5.27922 11.64 4.62922 11.11 4.02922L10.55 3.46922ZM21 5.05922C20.31 5.05922 19.67 5.32922 19.08 5.85922L13.45 11.4992L14.53 12.4992L20.11 6.93922C20.36 6.68922 20.66 6.55922 21 6.55922C21.34 6.55922 21.64 6.68922 21.89 6.93922L22.5 7.54922L23.53 6.46922L22.97 5.85922C22.38 5.32922 21.72 5.05922 21 5.05922ZM7 7.99922L2 21.9992L16 16.9992L7 7.99922ZM19 11.0592C18.3 11.0592 17.66 11.3292 17.06 11.8592L15.47 13.4492L16.55 14.5292L18.14 12.9392C18.39 12.6892 18.67 12.5592 19 12.5592C19.33 12.5592 19.63 12.6892 19.88 12.9392L21.5 14.5292L22.55 13.4992L20.95 11.8592C20.36 11.3292 19.7 11.0592 19 11.0592Z" />
    </Svg>
  );
};
