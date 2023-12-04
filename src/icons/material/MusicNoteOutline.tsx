import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3V13.55C11.2369 13.1094 10.3497 12.9332 9.47613 13.0486C8.60258 13.164 7.79158 13.5646 7.16907 14.1882C6.54656 14.8118 6.14739 15.6235 6.03354 16.4973C5.91968 17.371 6.09753 18.2579 6.53945 19.0202C6.98136 19.7825 7.66263 20.3776 8.47744 20.713C9.29225 21.0484 10.195 21.1054 11.0455 20.8751C11.896 20.6448 12.6467 20.1401 13.1809 19.4393C13.7152 18.7386 14.0031 17.8811 14 17V7H18V3H12ZM9.99998 19C9.60442 19 9.21774 18.8827 8.88884 18.6629C8.55994 18.4432 8.3036 18.1308 8.15222 17.7654C8.00085 17.3999 7.96124 16.9978 8.03841 16.6098C8.11558 16.2219 8.30606 15.8655 8.58577 15.5858C8.86547 15.3061 9.22184 15.1156 9.6098 15.0384C9.99776 14.9613 10.3999 15.0009 10.7653 15.1522C11.1308 15.3036 11.4432 15.56 11.6629 15.8889C11.8827 16.2178 12 16.6044 12 17C12 17.5304 11.7893 18.0391 11.4142 18.4142C11.0391 18.7893 10.5304 19 9.99998 19Z" />
    </Svg>
  );
};
