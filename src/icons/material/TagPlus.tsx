import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagPlusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.41 11.58L12.41 2.58C12.04 2.21 11.53 2 11 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11C2 11.53 2.21 12.04 2.59 12.41L3 12.81C3.9 12.27 4.94 12 6 12C7.5913 12 9.11742 12.6321 10.2426 13.7574C11.3679 14.8826 12 16.4087 12 18C12 19.06 11.72 20.09 11.18 21L11.58 21.4C11.95 21.78 12.47 22 13 22C13.53 22 14.04 21.79 14.41 21.41L21.41 14.41C21.79 14.04 22 13.53 22 13C22 12.47 21.79 11.96 21.41 11.58ZM5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM10 19H7V22H5V19H2V17H5V14H7V17H10V19Z" />
    </Svg>
  );
};
