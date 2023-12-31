import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToasterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 11C21 10.4696 20.7893 9.96086 20.4142 9.58579C20.0391 9.21071 19.5304 9 19 9H5C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11H2V13H3V20H21V13H22V11H21ZM17 15C16.6044 15 16.2178 14.8827 15.8889 14.6629C15.56 14.4432 15.3036 14.1308 15.1522 13.7654C15.0009 13.3999 14.9613 12.9978 15.0384 12.6098C15.1156 12.2219 15.3061 11.8655 15.5858 11.5858C15.8655 11.3061 16.2219 11.1156 16.6098 11.0384C16.9978 10.9613 17.3999 11.0009 17.7654 11.1522C18.1308 11.3036 18.4432 11.56 18.6629 11.8889C18.8827 12.2178 19 12.6044 19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15ZM18 8H6C6.33 5.75 8.88 4 12 4C15.12 4 17.63 5.75 18 8Z" />
    </Svg>
  );
};
