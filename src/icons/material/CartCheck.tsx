import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CartCheckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 19.9998C9 21.1098 8.11 21.9998 7 21.9998C5.89 21.9998 5 21.1098 5 19.9998C5 18.8898 5.9 17.9998 7 17.9998C8.1 17.9998 9 18.8998 9 19.9998ZM17 17.9998C15.9 17.9998 15 18.8998 15 19.9998C15 21.0998 15.9 21.9998 17 21.9998C18.1 21.9998 19 21.1098 19 19.9998C19 18.8898 18.11 17.9998 17 17.9998ZM7.17 14.7498L7.2 14.6298L8.1 12.9998H15.55C16.3 12.9998 16.96 12.5898 17.3 11.9698L21.16 4.95984L19.42 3.99984H19.41L18.31 5.99984L15.55 10.9998H8.53L8.4 10.7298L6.16 5.99984L5.21 3.99984L4.27 1.99984H1V3.99984H3L6.6 11.5898L5.25 14.0398C5.09 14.3198 5 14.6498 5 14.9998C5 16.1098 5.9 16.9998 7 16.9998H19V14.9998H7.42C7.29 14.9998 7.17 14.8898 7.17 14.7498ZM18 2.75984L16.59 1.33984L11.75 6.17984L9.16 3.58984L7.75 4.99984L11.75 8.99984L18 2.75984Z" />
    </Svg>
  );
};
