import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteWholeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 15C12.3956 15 12.7822 15.1173 13.1111 15.3371C13.44 15.5568 13.6964 15.8692 13.8478 16.2346C13.9991 16.6001 14.0387 17.0022 13.9616 17.3902C13.8844 17.7781 13.6939 18.1345 13.4142 18.4142C13.1345 18.6939 12.7781 18.8844 12.3902 18.9616C12.0022 19.0387 11.6001 18.9991 11.2346 18.8478C10.8692 18.6964 10.5568 18.44 10.3371 18.1111C10.1173 17.7822 10 17.3956 10 17C10 16.4696 10.2107 15.9609 10.5858 15.5858C10.9609 15.2107 11.4696 15 12 15ZM12 13C11.2089 13 10.4355 13.2346 9.77772 13.6741C9.11993 14.1136 8.60723 14.7384 8.30448 15.4693C8.00173 16.2002 7.92252 17.0044 8.07686 17.7804C8.2312 18.5563 8.61216 19.269 9.17157 19.8284C9.73098 20.3878 10.4437 20.7688 11.2196 20.9231C11.9956 21.0775 12.7998 20.9983 13.5307 20.6955C14.2616 20.3928 14.8864 19.8801 15.3259 19.2223C15.7654 18.5645 16 17.7911 16 17C16 15.9391 15.5786 14.9217 14.8284 14.1716C14.0783 13.4214 13.0609 13 12 13Z" />
    </Svg>
  );
};
