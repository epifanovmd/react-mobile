import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LockerMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 2H21C21.5304 2 22.0391 2.21071 22.4142 2.58579C22.7893 2.96086 23 3.46957 23 4V20C23 20.5304 22.7893 21.0391 22.4142 21.4142C22.0391 21.7893 21.5304 22 21 22H3C2.46957 22 1.96086 21.7893 1.58579 21.4142C1.21071 21.0391 1 20.5304 1 20V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2ZM13 4V20H21V4H13ZM3 4V20H11V4H3ZM5 13H7V17H5V13ZM5 6H9V7.5H5V6ZM5 9H9V10.5H5V9ZM15 13H17V17H15V13ZM15 6H19V7.5H15V6ZM15 9H19V10.5H15V9Z" />
    </Svg>
  );
};
