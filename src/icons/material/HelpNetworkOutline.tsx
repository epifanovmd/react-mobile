import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HelpNetworkOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 20C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H13V17H17C17.5304 17 18.0391 16.7893 18.4142 16.4142C18.7893 16.0391 19 15.5304 19 15V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H11V19H10C9.73478 19 9.48043 19.1054 9.29289 19.2929C9.10536 19.4804 9 19.7348 9 20H2V22H9C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22H22V20H15ZM7 15V5H17V15H7ZM11.95 6C11.17 6 10.55 6.18 10.07 6.5C9.61 6.89 9.38 7.4 9.39 8.1L9.4 8.13H11.11C11.12 7.86 11.2 7.65 11.36 7.5C11.5 7.38 11.72 7.31 11.95 7.31C12.22 7.31 12.45 7.4 12.61 7.56C12.77 7.73 12.85 7.96 12.85 8.22C12.85 8.5 12.78 8.75 12.64 8.95C12.5 9.16 12.33 9.33 12.1 9.5C11.65 9.78 11.34 10.05 11.17 10.29C11 10.5 10.89 10.89 10.89 11.33H12.67C12.67 11.06 12.7 10.84 12.78 10.68C12.86 10.5 13 10.36 13.24 10.21C13.64 10 13.97 9.74 14.22 9.39C14.5 9.03 14.62 8.67 14.62 8.22C14.62 7.55 14.38 7 13.9 6.61C13.42 6.2 12.77 6 11.95 6ZM10.89 12.22V14H12.67V12.22H10.89Z" />
    </Svg>
  );
};
