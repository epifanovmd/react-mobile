import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandPeaceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 19.0007H15V22.0007H7V19.0007ZM16.15 12.0007L12.97 10.3407C12.82 10.3407 12.69 10.4007 12.6 10.5007L12.3 10.8107L12.89 13.2307L11.91 13.4707L10.72 8.50072L9.25 9.18072L10.29 13.4707L9.32 13.7007L8.32 9.59072L7.85 9.80072C7.35 10.0007 7 10.5307 7 11.1407V15.5007C7 16.3007 7.73 17.0007 8.5 17.0007H15C15.39 17.0007 15.74 16.8407 16 16.5707L16.5 16.1607C16.5 16.1607 17 15.7807 17 15.3607V13.7007C17 13.7007 17 12.5607 16.15 12.0007ZM16.94 1.00072C16.4 0.910719 15.87 1.25072 15.76 1.80072L14.69 7.97072C14.47 7.94072 14.38 7.86072 14.08 7.83072L13.65 7.88072L12.41 1.80072C12.3 1.26072 11.78 0.910719 11.24 1.00072C10.69 1.13072 10.34 1.66072 10.45 2.20072L11.65 8.11072L12 9.67072C12.28 9.47072 12.61 9.34072 12.97 9.34072H13.31L16.31 10.9507L17.72 2.20072C17.83 1.66072 17.5 1.13072 16.94 1.00072Z" />
    </Svg>
  );
};
