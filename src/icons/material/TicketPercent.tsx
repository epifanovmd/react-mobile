import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TicketPercentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C3.11 10 4 10.9 4 12C4 12.5304 3.78929 13.0391 3.41421 13.4142C3.03914 13.7893 2.53043 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C21.4696 14 20.9609 13.7893 20.5858 13.4142C20.2107 13.0391 20 12.5304 20 12C20 10.89 20.9 10 22 10V6C22 4.89 21.1 4 20 4H4ZM15.5 7L17 8.5L8.5 17L7 15.5L15.5 7ZM8.81 7.04C9.79 7.04 10.58 7.83 10.58 8.81C10.58 9.27943 10.3935 9.72964 10.0616 10.0616C9.72964 10.3935 9.27943 10.58 8.81 10.58C7.83 10.58 7.04 9.79 7.04 8.81C7.04 8.34057 7.22648 7.89036 7.55842 7.55842C7.89036 7.22648 8.34057 7.04 8.81 7.04ZM15.19 13.42C16.17 13.42 16.96 14.21 16.96 15.19C16.96 15.6594 16.7735 16.1096 16.4416 16.4416C16.1096 16.7735 15.6594 16.96 15.19 16.96C14.21 16.96 13.42 16.17 13.42 15.19C13.42 14.7206 13.6065 14.2704 13.9384 13.9384C14.2704 13.6065 14.7206 13.42 15.19 13.42Z" />
    </Svg>
  );
};
