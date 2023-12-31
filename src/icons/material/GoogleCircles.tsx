import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleCirclesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.66 15H17C18 15 19 14.8 19.87 14.46C19.17 18.73 15.47 22 11 22C6 22 2 17.97 2 13C2 8.53 5.27 4.83 9.54 4.13C9.2 5 9 6 9 7V7.34C6.68 8.16 5 10.38 5 13C5 14.5913 5.63214 16.1174 6.75736 17.2426C7.88258 18.3679 9.4087 19 11 19C13.62 19 15.84 17.32 16.66 15ZM17 10C17.7956 10 18.5587 9.68393 19.1213 9.12132C19.6839 8.55871 20 7.79565 20 7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4C16.2044 4 15.4413 4.31607 14.8787 4.87868C14.3161 5.44129 14 6.20435 14 7C14 7.79565 14.3161 8.55871 14.8787 9.12132C15.4413 9.68393 16.2044 10 17 10ZM17 1C18.5913 1 20.1174 1.63214 21.2426 2.75736C22.3679 3.88258 23 5.4087 23 7C23 8.5913 22.3679 10.1174 21.2426 11.2426C20.1174 12.3679 18.5913 13 17 13C15.4087 13 13.8826 12.3679 12.7574 11.2426C11.6321 10.1174 11 8.5913 11 7C11 3.68 13.69 1 17 1Z" />
    </Svg>
  );
};
