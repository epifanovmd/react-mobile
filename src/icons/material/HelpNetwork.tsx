import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HelpNetworkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H13V19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H22V22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V17H7C5.89 17 5 16.1 5 15V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17ZM12.19 5C11.32 5 10.62 5.2 10.08 5.59C9.56 6 9.3 6.57 9.31 7.36L9.32 7.39H11.25C11.26 7.09 11.35 6.86 11.53 6.7C11.71 6.55 11.93 6.47 12.19 6.47C12.5 6.47 12.76 6.57 12.94 6.75C13.12 6.94 13.2 7.2 13.2 7.5C13.2 7.82 13.13 8.09 12.97 8.32C12.83 8.55 12.62 8.75 12.36 8.91C11.85 9.25 11.5 9.55 11.31 9.82C11.11 10.08 11 10.5 11 11H13C13 10.69 13.04 10.44 13.13 10.26C13.22 10.07 13.39 9.9 13.64 9.74C14.09 9.5 14.46 9.21 14.75 8.81C15.04 8.41 15.19 8 15.19 7.5C15.19 6.74 14.92 6.13 14.38 5.68C13.85 5.23 13.12 5 12.19 5ZM11 12V14H13V12H11Z" />
    </Svg>
  );
};
