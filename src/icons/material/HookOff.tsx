import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HookOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 9.85921V11.1792L15 13.1792V9.85921C17.14 9.30921 18.43 7.12921 17.87 4.99921C17.32 2.84921 15.14 1.55921 13 2.10921C10.86 2.66921 9.57 4.84921 10.13 6.99921C10.5 8.39921 11.59 9.49921 13 9.85921ZM14 3.99921C14.5304 3.99921 15.0391 4.20992 15.4142 4.58499C15.7893 4.96007 16 5.46878 16 5.99921C16 6.52964 15.7893 7.03835 15.4142 7.41342C15.0391 7.78849 14.5304 7.99921 14 7.99921C13.4696 7.99921 12.9609 7.78849 12.5858 7.41342C12.2107 7.03835 12 6.52964 12 5.99921C12 5.46878 12.2107 4.96007 12.5858 4.58499C12.9609 4.20992 13.4696 3.99921 14 3.99921ZM18.73 21.9992L14.86 18.1292C14.21 20.8092 11.5 22.4592 8.83 21.8192C6.6 21.2792 5 19.2892 5 16.9992V11.9992L10 16.9992H7C7 17.7949 7.31607 18.5579 7.87868 19.1205C8.44129 19.6831 9.20435 19.9992 10 19.9992C10.7956 19.9992 11.5587 19.6831 12.1213 19.1205C12.6839 18.5579 13 17.7949 13 16.9992V16.2692L2 5.26921L3.28 3.99921L13 13.7192L15 15.7192L20 20.7192L18.73 21.9992Z" />
    </Svg>
  );
};
