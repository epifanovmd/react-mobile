import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FootballHelmetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.5 12C13.1022 12 12.7206 12.158 12.4393 12.4393C12.158 12.7206 12 13.1022 12 13.5C12 13.8978 12.158 14.2794 12.4393 14.5607C12.7206 14.842 13.1022 15 13.5 15C13.8978 15 14.2794 14.842 14.5607 14.5607C14.842 14.2794 15 13.8978 15 13.5C15 13.1022 14.842 12.7206 14.5607 12.4393C14.2794 12.158 13.8978 12 13.5 12ZM13.5 3C18.19 3 22 6.58 22 11C22 12.62 22 14 21.09 16C17 16 16 20 12.5 20C10.32 20 9.27 18.28 9.05 16H9H8.24L6.96 20.3C6.81 20.79 6.33 21.08 5.84 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20C2 19.7348 2.10536 19.4804 2.29289 19.2929C2.48043 19.1054 2.73478 19 3 19V16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H6.75L7.23 12.39C6.72 12.14 6.13 12 5.5 12H5.07L5 11C5 6.58 8.81 3 13.5 3ZM5 16V19H5.26L6.15 16H5Z" />
    </Svg>
  );
};
