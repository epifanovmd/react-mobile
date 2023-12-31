import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteHalfIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 3H14V13.56C13.395 13.1987 12.7046 13.0054 12 13C11.2089 13 10.4355 13.2346 9.77772 13.6741C9.11993 14.1136 8.60723 14.7384 8.30448 15.4693C8.00173 16.2002 7.92252 17.0044 8.07686 17.7804C8.2312 18.5563 8.61216 19.269 9.17157 19.8284C9.73098 20.3878 10.4437 20.7688 11.2196 20.9231C11.9956 21.0775 12.7998 20.9983 13.5307 20.6955C14.2616 20.3928 14.8864 19.8801 15.3259 19.2223C15.7654 18.5645 16 17.7911 16 17V3ZM12 19C11.6044 19 11.2178 18.8827 10.8889 18.6629C10.56 18.4432 10.3036 18.1308 10.1522 17.7654C10.0009 17.3999 9.96126 16.9978 10.0384 16.6098C10.1156 16.2219 10.3061 15.8655 10.5858 15.5858C10.8655 15.3061 11.2219 15.1156 11.6098 15.0384C11.9978 14.9613 12.3999 15.0009 12.7654 15.1522C13.1308 15.3036 13.4432 15.56 13.6629 15.8889C13.8827 16.2178 14 16.6044 14 17C14 17.5304 13.7893 18.0391 13.4142 18.4142C13.0391 18.7893 12.5304 19 12 19Z" />
    </Svg>
  );
};
