import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.5 10C7.3 10 8 9.3 8 8.5C8 7.7 7.3 7 6.5 7C5.7 7 5 7.7 5 8.5C5 9.3 5.7 10 6.5 10ZM9 6L16 13L11 18L4 11V6H9ZM9 4H4C2.9 4 2 4.9 2 6V11C2 11.6 2.2 12.1 2.6 12.4L9.6 19.4C9.9 19.8 10.4 20 11 20C11.6 20 12.1 19.8 12.4 19.4L17.4 14.4C17.8 14 18 13.5 18 13C18 12.4 17.8 11.9 17.4 11.6L10.4 4.6C10.1 4.2 9.6 4 9 4ZM13.5 5.7L14.5 4.7L21.4 11.6C21.8 12 22 12.5 22 13C22 13.5 21.8 14.1 21.4 14.4L16 19.8L15 18.8L20.7 13L13.5 5.7Z" />
    </Svg>
  );
};
