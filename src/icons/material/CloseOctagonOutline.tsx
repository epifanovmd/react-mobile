import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloseOctagonOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.27 3L3 8.27V15.73L8.27 21H15.73C17.5 19.24 21 15.73 21 15.73V8.27L15.73 3H8.27ZM9.1 5H14.9L19 9.1V14.9L14.9 19H9.1L5 14.9V9.1L9.1 5ZM9.12 7.71L7.71 9.12L10.59 12L7.71 14.88L9.12 16.29L12 13.41L14.88 16.29L16.29 14.88L13.41 12L16.29 9.12L14.88 7.71L12 10.59" />
    </Svg>
  );
};
