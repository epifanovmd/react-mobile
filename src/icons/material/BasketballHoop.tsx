import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BasketballHoopIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 2H3C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H5V14H19V18H21C21.5304 18 22.0391 17.7893 22.4142 17.4142C22.7893 17.0391 23 16.5304 23 16V4C23 3.46957 22.7893 2.96086 22.4142 2.58579C22.0391 2.21071 21.5304 2 21 2ZM17 12H15V9H9V12H7V9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7H15C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9V12ZM7 16V19.5L8 23L10 21L12 23L14 21L16 23L17 19.5V16H7Z" />
    </Svg>
  );
};
