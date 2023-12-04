import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LibraryIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 8C12.7956 8 13.5587 7.68393 14.1213 7.12132C14.6839 6.55871 15 5.79565 15 5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7956 2 12 2C11.2044 2 10.4413 2.31607 9.87868 2.87868C9.31607 3.44129 9 4.20435 9 5C9 5.79565 9.31607 6.55871 9.87868 7.12132C10.4413 7.68393 11.2044 8 12 8ZM12 11.54C9.64 9.35 6.5 8 3 8V19C6.5 19 9.64 20.35 12 22.54C14.36 20.35 17.5 19 21 19V8C17.5 8 14.36 9.35 12 11.54Z" />
    </Svg>
  );
};
