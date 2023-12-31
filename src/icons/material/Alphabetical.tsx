import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphabeticalIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 11C6.53043 11 7.03914 11.2107 7.41421 11.5858C7.78929 11.9609 8 12.4696 8 13V17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H6ZM4 13V15H6V13H4ZM20 13V15H22V17H20C19.4696 17 18.9609 16.7893 18.5858 16.4142C18.2107 16.0391 18 15.5304 18 15V13C18 12.4696 18.2107 11.9609 18.5858 11.5858C18.9609 11.2107 19.4696 11 20 11H22V13H20ZM12 7V11H14C14.5304 11 15.0391 11.2107 15.4142 11.5858C15.7893 11.9609 16 12.4696 16 13V15C16 15.5304 15.7893 16.0391 15.4142 16.4142C15.0391 16.7893 14.5304 17 14 17H12C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15V7H12ZM12 15H14V13H12V15Z" />
    </Svg>
  );
};
