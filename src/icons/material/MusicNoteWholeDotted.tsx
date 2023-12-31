import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteWholeDottedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 15C10.3956 15 10.7822 15.1173 11.1111 15.3371C11.44 15.5568 11.6964 15.8692 11.8478 16.2346C11.9991 16.6001 12.0387 17.0022 11.9616 17.3902C11.8844 17.7781 11.6939 18.1345 11.4142 18.4142C11.1345 18.6939 10.7781 18.8844 10.3902 18.9616C10.0022 19.0387 9.60009 18.9991 9.23464 18.8478C8.86918 18.6964 8.55683 18.44 8.33706 18.1111C8.1173 17.7822 8 17.3956 8 17C8 16.4696 8.21072 15.9609 8.58579 15.5858C8.96086 15.2107 9.46957 15 10 15ZM10 13C9.20888 13 8.43552 13.2346 7.77772 13.6741C7.11992 14.1136 6.60723 14.7384 6.30448 15.4693C6.00173 16.2002 5.92252 17.0044 6.07686 17.7804C6.2312 18.5563 6.61216 19.269 7.17157 19.8284C7.73098 20.3878 8.44372 20.7688 9.21964 20.9231C9.99556 21.0775 10.7998 20.9983 11.5307 20.6955C12.2616 20.3928 12.8864 19.8801 13.3259 19.2223C13.7654 18.5645 14 17.7911 14 17C14 15.9391 13.5786 14.9217 12.8284 14.1716C12.0783 13.4214 11.0609 13 10 13ZM16.5 17C16.7967 17 17.0867 17.088 17.3334 17.2528C17.58 17.4176 17.7723 17.6519 17.8858 17.926C17.9994 18.2001 18.0291 18.5017 17.9712 18.7926C17.9133 19.0836 17.7704 19.3509 17.5607 19.5607C17.3509 19.7704 17.0836 19.9133 16.7926 19.9712C16.5017 20.0291 16.2001 19.9994 15.926 19.8858C15.6519 19.7723 15.4176 19.58 15.2528 19.3334C15.088 19.0867 15 18.7967 15 18.5C15 18.1022 15.158 17.7206 15.4393 17.4393C15.7206 17.158 16.1022 17 16.5 17Z" />
    </Svg>
  );
};
