import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NotebookRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 7V5H5V4C5 2.9 5.9 2 7 2H13V9L15.5 7.5L18 9V2H19C20 2 21 3 21 4V13.8C20.1 13.3 19.1 13 18 13C14.7 13 12 15.7 12 19C12 20.1 12.3 21.1 12.8 22H7C5.9 22 5 21 5 20V19H3V17H5V13H3V11H5V7H3ZM5 5V7H7V5H5ZM5 19H7V17H5V19ZM5 13H7V11H5V13ZM20.1 15.5L18 17.6L15.9 15.5L14.5 16.9L16.6 19L14.5 21.1L15.9 22.5L18 20.4L20.1 22.5L21.5 21.1L19.4 19L21.5 16.9L20.1 15.5Z" />
    </Svg>
  );
};
