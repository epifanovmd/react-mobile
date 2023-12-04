import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkypeBusinessIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.03 16.53C9.37 16.53 8.18 15.22 8.18 14.24C8.18 13.74 8.55 13.38 9.06 13.38C10.2 13.38 9.91 15 12.03 15C13.12 15 13.73 14.43 13.73 13.82C13.73 13.46 13.55 13.06 12.83 12.88L10.46 12.29C8.55 11.81 8.2 10.78 8.2 9.81C8.2 7.79 10.1 7.03 11.88 7.03C13.5 7.03 15.46 7.94 15.46 9.15C15.46 9.67 15 9.97 14.5 9.97C13.5 9.97 13.7 8.62 11.74 8.62C10.77 8.62 10.23 9.06 10.23 9.69C10.23 10.32 11 10.5 11.66 10.68L13.42 11.07C15.34 11.5 15.83 12.62 15.83 13.67C15.83 15.31 14.57 16.53 12.03 16.53ZM18 6C20.07 8.04 20.85 10.89 20.36 13.55C20.77 14.27 21 15.11 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C15.11 21 14.27 20.77 13.55 20.36C10.89 20.85 8.04 20.07 6 18C3.93 15.96 3.15 13.11 3.64 10.45C3.23 9.73 3 8.89 3 8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3C8.89 3 9.73 3.23 10.45 3.64C13.11 3.15 15.96 3.93 18 6ZM8 5C7.20435 5 6.44129 5.31607 5.87868 5.87868C5.31607 6.44129 5 7.20435 5 8C5 8.79 5.3 9.5 5.8 10.04C5.1 12.28 5.63 14.82 7.4 16.6C9.18 18.37 11.72 18.9 13.96 18.2C14.5 18.7 15.21 19 16 19C16.7956 19 17.5587 18.6839 18.1213 18.1213C18.6839 17.5587 19 16.7956 19 16C19 15.21 18.7 14.5 18.2 13.96C18.9 11.72 18.37 9.18 16.6 7.4C14.82 5.63 12.28 5.1 10.04 5.8C9.5 5.3 8.79 5 8 5Z" />
    </Svg>
  );
};
