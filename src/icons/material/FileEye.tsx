import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileEyeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 18C17.56 18 18 18.44 18 19C18 19.56 17.56 20 17 20C16.44 20 16 19.56 16 19C16 18.44 16.44 18 17 18ZM17 15C14.27 15 11.94 16.66 11 19C11.94 21.34 14.27 23 17 23C19.73 23 22.06 21.34 23 19C22.06 16.66 19.73 15 17 15ZM17 21.5C16.337 21.5 15.7011 21.2366 15.2322 20.7678C14.7634 20.2989 14.5 19.663 14.5 19C14.5 18.337 14.7634 17.7011 15.2322 17.2322C15.7011 16.7634 16.337 16.5 17 16.5C17.663 16.5 18.2989 16.7634 18.7678 17.2322C19.2366 17.7011 19.5 18.337 19.5 19C19.5 19.663 19.2366 20.2989 18.7678 20.7678C18.2989 21.2366 17.663 21.5 17 21.5ZM9.14 19.75L8.85 19L9.14 18.26C10.43 15.06 13.5 13 17 13C18.05 13 19.06 13.21 20 13.56V8L14 2H6C4.89 2 4 2.89 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H10.5C9.95 21.34 9.5 20.58 9.14 19.75ZM13 3.5L18.5 9H13V3.5Z" />
    </Svg>
  );
};
