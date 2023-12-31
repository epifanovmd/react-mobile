import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagTextIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.41 11.58L12.41 2.58C12.035 2.20808 11.5281 1.99958 11 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11C2.00223 11.5296 2.21441 12.0367 2.59 12.41L11.59 21.41C11.9634 21.7856 12.4704 21.9978 13 22C13.5296 21.9978 14.0366 21.7856 14.41 21.41L21.41 14.41C21.7856 14.0367 21.9978 13.5296 22 13C22.0002 12.7361 21.9482 12.4747 21.8469 12.231C21.7457 11.9873 21.5972 11.7661 21.41 11.58ZM6.5 8C6.20333 8 5.91332 7.91203 5.66664 7.7472C5.41997 7.58238 5.22771 7.34811 5.11418 7.07403C5.00065 6.79994 4.97094 6.49834 5.02882 6.20737C5.0867 5.91639 5.22956 5.64912 5.43934 5.43934C5.64912 5.22956 5.91639 5.0867 6.20736 5.02882C6.49834 4.97094 6.79994 5.00065 7.07403 5.11418C7.34811 5.22771 7.58238 5.41997 7.7472 5.66665C7.91203 5.91332 8 6.20333 8 6.5C8 6.89783 7.84196 7.27936 7.56066 7.56066C7.27936 7.84197 6.89782 8 6.5 8ZM11.59 15.41L7.59 11.41L9 10L13 14L11.59 15.41ZM15.59 14.41L10.09 8.91L11.5 7.5L17 13L15.59 14.41Z" />
    </Svg>
  );
};
