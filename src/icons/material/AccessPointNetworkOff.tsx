import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccessPointNetworkOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.83 13.83C15.55 13.11 16 12.11 16 11C16 9.89 15.55 8.89 14.83 8.17L16.24 6.76C17.33 7.85 18 9.35 18 11C18 12.65 17.33 14.15 16.24 15.24L14.83 13.83ZM14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9C11.4 9 10.87 9.27 10.5 9.68L13.32 12.5C13.73 12.13 14 11.6 14 11ZM17.66 16.66L19.07 18.07C20.88 16.26 22 13.76 22 11C22 8.24 20.88 5.74 19.07 3.93L17.66 5.34C19.11 6.78 20 8.79 20 11C20 13.22 19.11 15.22 17.66 16.66ZM22 21.18V20H20.82L22 21.18ZM20.27 22L21 22.73L19.73 24L17.73 22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V15.27L8.34 12.61C8.54 13.07 8.82 13.5 9.17 13.83L7.76 15.24C6.67 14.15 6 12.65 6 11C6 10.77 6 10.54 6.04 10.31L4.37 8.64C4.14 9.39 4 10.18 4 11C4 13.22 4.89 15.22 6.34 16.66L4.93 18.07C3.12 16.26 2 13.76 2 11C2 9.61 2.29 8.28 2.81 7.08L1 5.27L2.28 4L3.7 5.42L5.15 6.87L6.63 8.35L8.17 9.9L10.28 12L11 12.71L18.27 20H18.28L20.28 22H20.27ZM15.73 20L13 17.27V19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H15.73Z" />
    </Svg>
  );
};
