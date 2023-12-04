import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LinkVariantPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.6001 13.4001C10.7445 13.5927 10.8146 13.8309 10.7976 14.071C10.7805 14.3111 10.6774 14.537 10.5072 14.7072C10.337 14.8774 10.1111 14.9805 9.87098 14.9976C9.63087 15.0146 9.39267 14.9445 9.20009 14.8001C8.72179 14.3512 8.34056 13.809 8.07996 13.207C7.81936 12.6051 7.68491 11.9561 7.68491 11.3001C7.68491 10.6441 7.81936 9.99512 8.07996 9.39315C8.34056 8.79117 8.72179 8.24899 9.20009 7.80009L12.7001 4.20009C13.6516 3.2776 14.9248 2.76172 16.2501 2.76172C17.5754 2.76172 18.8486 3.2776 19.8001 4.20009C20.7226 5.15159 21.2385 6.42482 21.2385 7.75009C21.2385 9.07537 20.7226 10.3486 19.8001 11.3001L18.3001 12.8001C18.3215 11.9819 18.1857 11.1672 17.9001 10.4001L18.4001 9.90009C18.9341 9.31137 19.23 8.54496 19.23 7.75009C19.23 6.95523 18.9341 6.18882 18.4001 5.60009C17.8114 5.06605 17.045 4.77022 16.2501 4.77022C15.4552 4.77022 14.6888 5.06605 14.1001 5.60009L10.6001 9.20009C10.3157 9.47095 10.0893 9.79674 9.93457 10.1577C9.77987 10.5187 9.70009 10.9074 9.70009 11.3001C9.70009 11.6928 9.77987 12.0815 9.93457 12.4425C10.0893 12.8034 10.3157 13.1292 10.6001 13.4001ZM23.0001 18.0001V20.0001H20.0001V23.0001H18.0001V20.0001H15.0001V18.0001H18.0001V15.0001H20.0001V18.0001H23.0001ZM16.2001 13.7001C16.3734 12.8929 16.3356 12.0547 16.0904 11.2664C15.8451 10.4782 15.4007 9.76646 14.8001 9.20009C14.6075 9.05566 14.3693 8.98555 14.1292 9.00261C13.8891 9.01967 13.6632 9.12278 13.493 9.29299C13.3228 9.4632 13.2197 9.68909 13.2026 9.9292C13.1855 10.1693 13.2557 10.4075 13.4001 10.6001C13.6845 10.8709 13.9109 11.1967 14.0656 11.5577C14.2203 11.9187 14.3001 12.3074 14.3001 12.7001C14.3001 13.0928 14.2203 13.4815 14.0656 13.8425C13.9109 14.2034 13.6845 14.5292 13.4001 14.8001L9.90009 18.4001C9.31137 18.9341 8.54496 19.23 7.75009 19.23C6.95523 19.23 6.18882 18.9341 5.60009 18.4001C5.06605 17.8114 4.77022 17.045 4.77022 16.2501C4.77022 15.4552 5.06605 14.6888 5.60009 14.1001L6.10009 13.7001C5.82217 12.8964 5.6868 12.0504 5.70009 11.2001L4.20009 12.7001C3.2776 13.6516 2.76172 14.9248 2.76172 16.2501C2.76172 17.5754 3.2776 18.8486 4.20009 19.8001C5.15159 20.7226 6.42482 21.2385 7.75009 21.2385C9.07537 21.2385 10.3486 20.7226 11.3001 19.8001L13.1001 18.0001C13.253 17.0938 13.612 16.2347 14.1495 15.4892C14.687 14.7436 15.3885 14.1315 16.2001 13.7001Z" />
    </Svg>
  );
};
