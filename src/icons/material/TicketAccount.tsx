import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TicketAccountIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 12C20 12.5304 20.2107 13.0391 20.5858 13.4142C20.9609 13.7893 21.4696 14 22 14V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V14C3.11 14 4 13.1 4 12C4 11.4696 3.78929 10.9609 3.41421 10.5858C3.03914 10.2107 2.53043 10 2 10V6C2 4.89 2.9 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V10C21.4696 10 20.9609 10.2107 20.5858 10.5858C20.2107 10.9609 20 11.4696 20 12ZM16.5 16.25C16.5 14.75 13.5 14 12 14C10.5 14 7.5 14.75 7.5 16.25V17H16.5V16.25ZM12 12.25C12.5967 12.25 13.169 12.0129 13.591 11.591C14.0129 11.169 14.25 10.5967 14.25 10C14.25 9.40326 14.0129 8.83097 13.591 8.40901C13.169 7.98705 12.5967 7.75 12 7.75C11.4033 7.75 10.831 7.98705 10.409 8.40901C9.98705 8.83097 9.75 9.40326 9.75 10C9.75 10.5967 9.98705 11.169 10.409 11.591C10.831 12.0129 11.4033 12.25 12 12.25Z" />
    </Svg>
  );
};
