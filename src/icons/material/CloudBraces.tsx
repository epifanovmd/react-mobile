import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudBracesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 20C4.4087 20 2.88258 19.3679 1.75736 18.2426C0.632141 17.1174 0 15.5913 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4C15.63 4 18.66 6.58 19.35 10C21.95 10.19 24 12.36 24 15C24 15.6566 23.8707 16.3068 23.6194 16.9134C23.3681 17.52 22.9998 18.0712 22.5355 18.5355C22.0712 18.9998 21.52 19.3681 20.9134 19.6194C20.3068 19.8707 19.6566 20 19 20H6ZM18.5 12H18C17.7348 12 17.4804 11.8946 17.2929 11.7071C17.1054 11.5196 17 11.2652 17 11V10C17 9.46957 16.7893 8.96086 16.4142 8.58579C16.0391 8.21071 15.5304 8 15 8H13.5V10H15V11C15 11.5304 15.2107 12.0391 15.5858 12.4142C15.9609 12.7893 16.4696 13 17 13C16.4696 13 15.9609 13.2107 15.5858 13.5858C15.2107 13.9609 15 14.4696 15 15V16H13.5V18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V15C17 14.7348 17.1054 14.4804 17.2929 14.2929C17.4804 14.1054 17.7348 14 18 14H18.5V12ZM5.5 12V14H6C6.26522 14 6.51957 14.1054 6.70711 14.2929C6.89464 14.4804 7 14.7348 7 15V16C7 16.5304 7.21071 17.0391 7.58579 17.4142C7.96086 17.7893 8.46957 18 9 18H10.5V16H9V15C9 14.4696 8.78929 13.9609 8.41421 13.5858C8.03914 13.2107 7.53043 13 7 13C7.53043 13 8.03914 12.7893 8.41421 12.4142C8.78929 12.0391 9 11.5304 9 11V10H10.5V8H9C8.46957 8 7.96086 8.21071 7.58579 8.58579C7.21071 8.96086 7 9.46957 7 10V11C7 11.2652 6.89464 11.5196 6.70711 11.7071C6.51957 11.8946 6.26522 12 6 12H5.5Z" />
    </Svg>
  );
};
