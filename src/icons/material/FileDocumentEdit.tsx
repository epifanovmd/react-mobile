import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileDocumentEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 2C4.89 2 4 2.89 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H10V20.09L12.09 18H6V16H14.09L16.09 14H6V12H18.09L20 10.09V8L14 2H6ZM13 3.5L18.5 9H13V3.5ZM20.15 13C20 13 19.86 13.05 19.75 13.16L18.73 14.18L20.82 16.26L21.84 15.25C22.05 15.03 22.05 14.67 21.84 14.46L20.54 13.16C20.43 13.05 20.29 13 20.15 13ZM18.14 14.77L12 20.92V23H14.08L20.23 16.85L18.14 14.77Z" />
    </Svg>
  );
};
