import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderEditOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 11.11C20.92 11.11 20.72 11.21 20.62 11.31L19.62 12.31L21.72 14.42L22.72 13.41C22.92 13.21 22.92 12.81 22.72 12.61L21.42 11.31C21.32 11.21 21.22 11.11 21 11.11ZM19.12 12.91L13 18.92V21H15.12L21.22 14.92L19.12 12.91ZM21 8V8.11L19 10.11V8H3V18H11V20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V6C1 4.91 1.9 4 3 4H9L11 6H19C20.12 6 21 6.91 21 8Z" />
    </Svg>
  );
};
