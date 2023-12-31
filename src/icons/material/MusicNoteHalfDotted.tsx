import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteHalfDottedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 3H12V13.56C11.395 13.1987 10.7046 13.0054 10 13C9.20888 13 8.43552 13.2346 7.77772 13.6741C7.11992 14.1136 6.60723 14.7384 6.30448 15.4693C6.00173 16.2002 5.92252 17.0044 6.07686 17.7804C6.2312 18.5563 6.61216 19.269 7.17157 19.8284C7.73098 20.3878 8.44372 20.7688 9.21964 20.9231C9.99556 21.0775 10.7998 20.9983 11.5307 20.6955C12.2616 20.3928 12.8864 19.8801 13.3259 19.2223C13.7654 18.5645 14 17.7911 14 17V3ZM10 19C9.60444 19 9.21776 18.8827 8.88886 18.6629C8.55996 18.4432 8.30362 18.1308 8.15224 17.7654C8.00087 17.3999 7.96126 16.9978 8.03843 16.6098C8.1156 16.2219 8.30608 15.8655 8.58579 15.5858C8.86549 15.3061 9.22186 15.1156 9.60982 15.0384C9.99778 14.9613 10.3999 15.0009 10.7654 15.1522C11.1308 15.3036 11.4432 15.56 11.6629 15.8889C11.8827 16.2178 12 16.6044 12 17C12 17.5304 11.7893 18.0391 11.4142 18.4142C11.0391 18.7893 10.5304 19 10 19ZM16.5 20C16.2033 20 15.9133 19.912 15.6666 19.7472C15.42 19.5824 15.2277 19.3481 15.1142 19.074C15.0007 18.7999 14.9709 18.4983 15.0288 18.2074C15.0867 17.9164 15.2296 17.6491 15.4393 17.4393C15.6491 17.2296 15.9164 17.0867 16.2074 17.0288C16.4983 16.9709 16.7999 17.0007 17.074 17.1142C17.3481 17.2277 17.5824 17.42 17.7472 17.6666C17.912 17.9133 18 18.2033 18 18.5C18 18.8978 17.842 19.2794 17.5607 19.5607C17.2794 19.842 16.8978 20 16.5 20Z" />
    </Svg>
  );
};
