import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneRotateLandscapeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H9C9.53043 18 10.0391 17.7893 10.4142 17.4142C10.7893 17.0391 11 16.5304 11 16V3C11 2.46957 10.7893 1.96086 10.4142 1.58579C10.0391 1.21071 9.53043 1 9 1ZM9 15H3V3H9V15ZM21 13H13V15H21V21H9V20H6V21C6 21.5304 6.21071 22.0391 6.58579 22.4142C6.96086 22.7893 7.46957 23 8 23H21C21.5304 23 22.0391 22.7893 22.4142 22.4142C22.7893 22.0391 23 21.5304 23 21V15C23 14.4696 22.7893 13.9609 22.4142 13.5858C22.0391 13.2107 21.5304 13 21 13ZM23 10L19 8L20.91 7.09C19.74 4.31 17 2.5 14 2.5V1C16.3869 1 18.6761 1.94821 20.364 3.63604C22.0518 5.32387 23 7.61305 23 10Z" />
    </Svg>
  );
};
