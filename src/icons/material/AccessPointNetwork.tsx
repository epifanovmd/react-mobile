import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccessPointNetworkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.93 3.93C3.12 5.74 2 8.24 2 11C2 13.76 3.12 16.26 4.93 18.07L6.34 16.66C4.89 15.22 4 13.22 4 11C4 8.79 4.89 6.78 6.34 5.34L4.93 3.93ZM19.07 3.93L17.66 5.34C19.11 6.78 20 8.79 20 11C20 13.22 19.11 15.22 17.66 16.66L19.07 18.07C20.88 16.26 22 13.76 22 11C22 8.24 20.88 5.74 19.07 3.93ZM7.76 6.76C6.67 7.85 6 9.35 6 11C6 12.65 6.67 14.15 7.76 15.24L9.17 13.83C8.45 13.11 8 12.11 8 11C8 9.89 8.45 8.89 9.17 8.17L7.76 6.76ZM16.24 6.76L14.83 8.17C15.55 8.89 16 9.89 16 11C16 12.11 15.55 13.11 14.83 13.83L16.24 15.24C17.33 14.15 18 12.65 18 11C18 9.35 17.33 7.85 16.24 6.76ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9ZM11 15V19H10C9.73478 19 9.48043 19.1054 9.29289 19.2929C9.10536 19.4804 9 19.7348 9 20H2V22H9C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22H22V20H15C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H13V15H11Z" />
    </Svg>
  );
};
