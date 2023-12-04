import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeakerOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 5.27L3.28 4L21 21.72L19.73 23L18.27 21.54C17.93 21.83 17.5 22 17 22H7C5.89 22 5 21.1 5 20V8.27L2 5.27ZM12 18C11.2044 18 10.4413 17.6839 9.87868 17.1213C9.31607 16.5587 9 15.7956 9 15C9 14.24 9.28 13.54 9.75 13L8.33 11.6C7.5 12.5 7 13.69 7 15C7 16.3261 7.52678 17.5979 8.46447 18.5355C9.40215 19.4732 10.6739 20 12 20C13.31 20 14.5 19.5 15.4 18.67L14 17.25C13.45 17.72 12.76 18 12 18ZM17 15C17 13.6739 16.4732 12.4021 15.5355 11.4645C14.5979 10.5268 13.3261 10 12 10H11.82L5.12 3.3C5.41 2.54 6.14 2 7 2H17C17.5304 2 18.0391 2.21071 18.4142 2.58579C18.7893 2.96086 19 3.46957 19 4V17.18L17 15.17V15ZM12 4C10.89 4 10 4.89 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6C14 4.89 13.1 4 12 4Z" />
    </Svg>
  );
};
