import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleClassroomIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3L0 21C0 21.2652 0.105357 21.5196 0.292893 21.7071C0.48043 21.8946 0.734784 22 1 22H23C23.2652 22 23.5196 21.8946 23.7071 21.7071C23.8946 21.5196 24 21.2652 24 21V3C24 2.73478 23.8946 2.48043 23.7071 2.29289C23.5196 2.10536 23.2652 2 23 2ZM22 20H20V19H15V20H2V4H22V20ZM10.29 9.71C10.29 9.25648 10.4702 8.82154 10.7908 8.50085C11.1115 8.18016 11.5465 8 12 8C12.95 8 13.71 8.77 13.71 9.71C13.71 10.66 12.95 11.43 12 11.43C11.05 11.43 10.29 10.66 10.29 9.71ZM5.71 11.29C5.71 10.58 6.29 10 7 10C7.34213 10 7.67025 10.1359 7.91217 10.3778C8.15409 10.6198 8.29 10.9479 8.29 11.29C8.29 12 7.71 12.57 7 12.57C6.29 12.57 5.71 12 5.71 11.29ZM15.71 11.29C15.71 10.9479 15.8459 10.6198 16.0878 10.3778C16.3298 10.1359 16.6579 10 17 10C17.3421 10 17.6702 10.1359 17.9122 10.3778C18.1541 10.6198 18.29 10.9479 18.29 11.29C18.29 12 17.71 12.57 17 12.57C16.29 12.57 15.71 12 15.71 11.29ZM20 15.14V16H16H14H10H8H4V15.14C4 14.2 5.55 13.43 7 13.43C7.55 13.43 8.11 13.54 8.6 13.73C9.35 13.04 10.7 12.57 12 12.57C13.3 12.57 14.65 13.04 15.4 13.73C15.89 13.54 16.45 13.43 17 13.43C18.45 13.43 20 14.2 20 15.14Z" />
    </Svg>
  );
};
