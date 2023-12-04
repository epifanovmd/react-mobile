import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileReplaceOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 3L12 1H4C3.46957 1 2.96086 1.21071 2.58579 1.58579C2.21071 1.96086 2 2.46957 2 3V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H11V19L15 16L11 13V15H4V3H14ZM21 10V21C21 21.5304 20.7893 22.0391 20.4142 22.4142C20.0391 22.7893 19.5304 23 19 23H8C7.46957 23 6.96086 22.7893 6.58579 22.4142C6.21071 22.0391 6 21.5304 6 21V19H8V21H19V12H14V7H8V13H6V7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5H16L21 10Z" />
    </Svg>
  );
};
