import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OwlIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 16C12.56 16.84 13.31 17.53 14.2 18L12 20.2L9.8 18C10.69 17.53 11.45 16.84 12 16ZM17 11.2C16.4696 11.2 15.9609 11.4107 15.5858 11.7858C15.2107 12.1609 15 12.6696 15 13.2C15 13.7304 15.2107 14.2391 15.5858 14.6142C15.9609 14.9893 16.4696 15.2 17 15.2C17.5304 15.2 18.0391 14.9893 18.4142 14.6142C18.7893 14.2391 19 13.7304 19 13.2C19 12.09 18.1 11.2 17 11.2ZM7 11.2C6.46957 11.2 5.96086 11.4107 5.58579 11.7858C5.21071 12.1609 5 12.6696 5 13.2C5 13.7304 5.21071 14.2391 5.58579 14.6142C5.96086 14.9893 6.46957 15.2 7 15.2C7.53043 15.2 8.03914 14.9893 8.41421 14.6142C8.78929 14.2391 9 13.7304 9 13.2C9 12.09 8.1 11.2 7 11.2ZM17 8.7C18.0609 8.7 19.0783 9.12143 19.8284 9.87157C20.5786 10.6217 21 11.6391 21 12.7C21 13.7609 20.5786 14.7783 19.8284 15.5284C19.0783 16.2786 18.0609 16.7 17 16.7C15.9391 16.7 14.9217 16.2786 14.1716 15.5284C13.4214 14.7783 13 13.7609 13 12.7C13 11.6391 13.4214 10.6217 14.1716 9.87157C14.9217 9.12143 15.9391 8.7 17 8.7ZM7 8.7C8.06087 8.7 9.07828 9.12143 9.82843 9.87157C10.5786 10.6217 11 11.6391 11 12.7C11 13.7609 10.5786 14.7783 9.82843 15.5284C9.07828 16.2786 8.06087 16.7 7 16.7C5.93913 16.7 4.92172 16.2786 4.17157 15.5284C3.42143 14.7783 3 13.7609 3 12.7C3 11.6391 3.42143 10.6217 4.17157 9.87157C4.92172 9.12143 5.93913 8.7 7 8.7ZM2.24 1C4 4.7 2.73 7.46 1.55 10.2C1.19 11 1 11.83 1 12.7C1 14.2913 1.63214 15.8174 2.75736 16.9426C3.88258 18.0679 5.4087 18.7 7 18.7C7.21 18.69 7.42 18.68 7.63 18.65L10.59 21.61L12 23L13.41 21.61L16.37 18.65C16.58 18.68 16.79 18.69 17 18.7C18.5913 18.7 20.1174 18.0679 21.2426 16.9426C22.3679 15.8174 23 14.2913 23 12.7C23 11.83 22.81 11 22.45 10.2C21.27 7.46 20 4.7 21.76 1C19.12 3.06 15.36 4.69 12 4.7C8.64 4.69 4.88 3.06 2.24 1Z" />
    </Svg>
  );
};
