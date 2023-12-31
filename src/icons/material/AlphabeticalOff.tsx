import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphabeticalOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.46L16 15.31L14 13.31L13.65 13L9.99999 9.33998L2.38999 1.72998L1.10999 2.99998L9.99999 11.89V15C9.99999 15.5304 10.2107 16.0391 10.5858 16.4142C10.9608 16.7893 11.4696 17 12 17H14C14.3101 16.9996 14.6154 16.9241 14.89 16.78L20.84 22.73L22.11 21.46ZM12 15V13.89L13.11 15H12ZM16 12.78L14.22 11C14.6757 11.0479 15.1011 11.2508 15.4252 11.5748C15.7492 11.8988 15.9521 12.3243 16 12.78ZM20.2 17L18 14.8V13C18 12.4695 18.2107 11.9608 18.5858 11.5858C18.9608 11.2107 19.4696 11 20 11H22V13H20V15H22V17H20.2ZM5.99999 11H3.99999C3.46955 11 2.96084 11.2107 2.58577 11.5858C2.2107 11.9608 1.99999 12.4695 1.99999 13V15C1.99999 15.5304 2.2107 16.0391 2.58577 16.4142C2.96084 16.7893 3.46955 17 3.99999 17H7.99999V13C7.99999 12.4695 7.78927 11.9608 7.4142 11.5858C7.03913 11.2107 6.53042 11 5.99999 11ZM5.99999 15H3.99999V13H5.99999V15ZM12 8.79998L10.2 6.99998H12V8.79998Z" />
    </Svg>
  );
};
