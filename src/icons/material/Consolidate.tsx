import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ConsolidateIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 9H20V4H22V9C22 9.53043 21.7893 10.0391 21.4142 10.4142C21.0391 10.7893 20.5304 11 20 11H18V13L15 10L18 7V9ZM14 10C14 9.60444 13.8827 9.21776 13.6629 8.88886C13.4432 8.55996 13.1308 8.30362 12.7654 8.15224C12.3999 8.00087 11.9978 7.96126 11.6098 8.03843C11.2219 8.1156 10.8655 8.30608 10.5858 8.58579C10.3061 8.86549 10.1156 9.22186 10.0384 9.60982C9.96126 9.99778 10.0009 10.3999 10.1522 10.7654C10.3036 11.1308 10.56 11.4432 10.8889 11.6629C11.2178 11.8827 11.6044 12 12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10ZM2 11V16H4V11H6V13L9 10L6 7V9H4C3.46957 9 2.96086 9.21071 2.58579 9.58579C2.21071 9.96086 2 10.4696 2 11ZM15 16L12 13L9 16H11V18C11 18.5304 11.2107 19.0391 11.5858 19.4142C11.9609 19.7893 12.4696 20 13 20H18V18H13V16" />
    </Svg>
  );
};
