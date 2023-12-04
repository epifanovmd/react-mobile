import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PodcastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 18.25V21.5H7V18.25C7 16.87 9.24 15.75 12 15.75C14.76 15.75 17 16.87 17 18.25ZM12 5.5C13.7239 5.5 15.3772 6.18482 16.5962 7.40381C17.8152 8.62279 18.5 10.2761 18.5 12C18.5 13.25 18.15 14.42 17.54 15.41L16 14.04C16.32 13.43 16.5 12.73 16.5 12C16.5 9.5 14.5 7.5 12 7.5C9.5 7.5 7.5 9.5 7.5 12C7.5 12.73 7.68 13.43 8 14.04L6.46 15.41C5.85 14.42 5.5 13.25 5.5 12C5.5 10.2761 6.18482 8.62279 7.40381 7.40381C8.62279 6.18482 10.2761 5.5 12 5.5ZM12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.28 21.77 16.39 20.54 18.11L19.04 16.76C19.96 15.4 20.5 13.76 20.5 12C20.5 9.74566 19.6045 7.58365 18.0104 5.98959C16.4163 4.39553 14.2543 3.5 12 3.5C9.74566 3.5 7.58365 4.39553 5.98959 5.98959C4.39553 7.58365 3.5 9.74566 3.5 12C3.5 13.76 4.04 15.4 4.96 16.76L3.46 18.11C2.23 16.39 1.5 14.28 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5ZM12 9.5C12.663 9.5 13.2989 9.76339 13.7678 10.2322C14.2366 10.7011 14.5 11.337 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5C11.337 14.5 10.7011 14.2366 10.2322 13.7678C9.76339 13.2989 9.5 12.663 9.5 12C9.5 11.337 9.76339 10.7011 10.2322 10.2322C10.7011 9.76339 11.337 9.5 12 9.5Z" />
    </Svg>
  );
};
