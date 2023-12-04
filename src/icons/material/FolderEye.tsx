import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderEyeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C20.6 13.6 18.9 13 17 13C13.5 13 10.4 15.1 9.1 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20ZM23 19C22.1 21.3 19.7 23 17 23C14.3 23 11.9 21.3 11 19C11.9 16.7 14.3 15 17 15C19.7 15 22.1 16.7 23 19ZM19.5 19C19.5 17.6 18.4 16.5 17 16.5C15.6 16.5 14.5 17.6 14.5 19C14.5 20.4 15.6 21.5 17 21.5C18.4 21.5 19.5 20.4 19.5 19ZM17 18C16.4 18 16 18.4 16 19C16 19.6 16.4 20 17 20C17.6 20 18 19.6 18 19C18 18.4 17.6 18 17 18Z" />
    </Svg>
  );
};
