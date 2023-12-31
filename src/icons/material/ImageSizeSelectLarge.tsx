import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ImageSizeSelectLargeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 15H23V17H21V15ZM21 11H23V13H21V11ZM23 19H21V21C22 21 23 20 23 19ZM13 3H15V5H13V3ZM21 7H23V9H21V7ZM21 3V5H23C23 4 22 3 21 3ZM1 7H3V9H1V7ZM17 3H19V5H17V3ZM17 19H19V21H17V19ZM3 3C2 3 1 4 1 5H3V3ZM9 3H11V5H9V3ZM5 3H7V5H5V3ZM1 11V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15V11H1ZM3 19L5.5 15.79L7.29 17.94L9.79 14.72L13 19H3Z" />
    </Svg>
  );
};
