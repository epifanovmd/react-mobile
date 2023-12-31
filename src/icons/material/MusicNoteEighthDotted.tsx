import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteEighthDottedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3V13.55C11.2369 13.1094 10.3497 12.9332 9.47613 13.0486C8.60258 13.164 7.79158 13.5646 7.16907 14.1882C6.54656 14.8118 6.14739 15.6235 6.03354 16.4973C5.91968 17.371 6.09753 18.2579 6.53945 19.0202C6.98136 19.7825 7.66263 20.3776 8.47744 20.713C9.29225 21.0484 10.195 21.1054 11.0455 20.8751C11.896 20.6448 12.6467 20.1401 13.1809 19.4393C13.7152 18.7386 14.0031 17.8811 14 17V7H18V3H12ZM16.5 20C16.2033 20 15.9133 19.912 15.6666 19.7472C15.42 19.5824 15.2277 19.3481 15.1142 19.074C15.0006 18.7999 14.9709 18.4983 15.0288 18.2074C15.0867 17.9164 15.2295 17.6491 15.4393 17.4393C15.6491 17.2296 15.9164 17.0867 16.2073 17.0288C16.4983 16.9709 16.7999 17.0007 17.074 17.1142C17.3481 17.2277 17.5824 17.42 17.7472 17.6666C17.912 17.9133 18 18.2033 18 18.5C18 18.8978 17.8419 19.2794 17.5606 19.5607C17.2793 19.842 16.8978 20 16.5 20Z" />
    </Svg>
  );
};
