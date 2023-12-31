import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OneUpIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 19C9.4 19 9 18.6 9 18V17C9 16.5 9.4 16 10 16C10.5 16 11 16.4 11 17V18C11 18.6 10.6 19 10 19ZM15 18V17C15 16.5 14.6 16 14 16C13.5 16 13 16.4 13 17V18C13 18.5 13.4 19 14 19C14.6 19 15 18.6 15 18ZM22 12C22 14.6 20.4 16.9 18 18.4V20C18 20.5304 17.7893 21.0391 17.4142 21.4142C17.0391 21.7893 16.5304 22 16 22H8C7.46957 22 6.96086 21.7893 6.58579 21.4142C6.21071 21.0391 6 20.5304 6 20V18.4C3.6 16.9 2 14.6 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12ZM7 10C7 8.9 6.4 7.9 5.5 7.4C4.5 8.7 4 10.3 4 12C4 12.3 4 12.7 4.1 13C5.7 12.9 7 11.6 7 10ZM9 9C9 10.7 10.3 12 12 12C13.7 12 15 10.7 15 9C15 7.3 13.7 6 12 6C10.3 6 9 7.3 9 9ZM16 20V15.5C14.8 15.2 13.4 15 12 15C10.6 15 9.2 15.2 8 15.5V20H16ZM19.9 13C20 12.7 20 12.3 20 12C20 10.3 19.5 8.7 18.5 7.4C17.6 7.9 17 8.9 17 10C17 11.6 18.3 12.9 19.9 13Z" />
    </Svg>
  );
};
