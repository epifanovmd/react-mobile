import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EscalatorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 8H18.95L6.95 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18C2 17.4696 2.21071 16.9609 2.58579 16.5858C2.96086 16.2107 3.46957 16 4 16H5.29L7 14.29V10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9H9C9.26522 9 9.51957 9.10536 9.70711 9.29289C9.89464 9.48043 10 9.73478 10 10V11.29L17.29 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8ZM8.5 5C8.89782 5 9.27936 5.15804 9.56066 5.43934C9.84196 5.72064 10 6.10218 10 6.5C10 6.89782 9.84196 7.27936 9.56066 7.56066C9.27936 7.84196 8.89782 8 8.5 8C8.10218 8 7.72064 7.84196 7.43934 7.56066C7.15804 7.27936 7 6.89782 7 6.5C7 6.10218 7.15804 5.72064 7.43934 5.43934C7.72064 5.15804 8.10218 5 8.5 5Z" />
    </Svg>
  );
};
