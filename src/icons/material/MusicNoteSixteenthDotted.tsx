import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteSixteenthDottedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 18.5C18 18.7967 17.912 19.0867 17.7472 19.3334C17.5824 19.58 17.3481 19.7723 17.074 19.8858C16.7999 19.9993 16.4983 20.0291 16.2073 19.9712C15.9164 19.9133 15.6491 19.7704 15.4393 19.5607C15.2295 19.3509 15.0867 19.0836 15.0288 18.7926C14.9709 18.5017 15.0006 18.2001 15.1142 17.926C15.2277 17.6519 15.42 17.4176 15.6666 17.2528C15.9133 17.088 16.2033 17 16.5 17C16.8978 17 17.2793 17.158 17.5606 17.4393C17.8419 17.7206 18 18.1022 18 18.5ZM18 7V3H12V13.55C11.2369 13.1094 10.3497 12.9332 9.47613 13.0486C8.60258 13.164 7.79158 13.5646 7.16907 14.1882C6.54656 14.8118 6.14739 15.6235 6.03354 16.4973C5.91968 17.371 6.09753 18.2579 6.53945 19.0202C6.98136 19.7825 7.66263 20.3776 8.47744 20.713C9.29225 21.0484 10.195 21.1054 11.0455 20.8751C11.896 20.6448 12.6467 20.1401 13.1809 19.4393C13.7152 18.7386 14.0031 17.8811 14 17V11H18V8H14V7H18Z" />
    </Svg>
  );
};
