import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileSyncOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14L20 8V11.5C19.4 11.2 18.7 11.1 18 11V9H13V4H6V20H11.5C11.8 20.7 12.3 21.4 12.8 22ZM17 12L14.8 14.2L17 16.4V15C18.4 15 19.5 16.1 19.5 17.5C19.5 17.9 19.4 18.3 19.2 18.6L20.3 19.7C20.7 19.1 21 18.3 21 17.5C21 15.3 19.2 13.5 17 13.5V12ZM19.2 20.8L17 18.5V20C15.6 20 14.5 18.9 14.5 17.5C14.5 17.1 14.6 16.7 14.8 16.4L13.7 15.3C13.3 15.9 13 16.7 13 17.5C13 19.7 14.8 21.5 17 21.5V23L19.2 20.8Z" />
    </Svg>
  );
};
