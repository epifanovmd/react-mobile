import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GenderMaleFemaleVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 3C7 3.77623 7.18073 4.54179 7.52786 5.23607C7.875 5.93035 8.37902 6.53426 9 7C8.37902 7.46574 7.875 8.06965 7.52786 8.76393C7.18073 9.45821 7 10.2238 7 11C6.99976 12.1527 7.39778 13.27 8.12669 14.1629C8.8556 15.0558 9.87064 15.6695 11 15.9V18H9V20H11V22H13V20H15V18H13V15.9C14.1294 15.6695 15.1444 15.0558 15.8733 14.1629C16.6022 13.27 17.0002 12.1527 17 11C17 10.2238 16.8193 9.45821 16.4721 8.76393C16.125 8.06965 15.621 7.46574 15 7C15.621 6.53426 16.125 5.93035 16.4721 5.23607C16.8193 4.54179 17 3.77623 17 3H15C15 3.79565 14.6839 4.55871 14.1213 5.12132C13.5587 5.68393 12.7956 6 12 6C11.2044 6 10.4413 5.68393 9.87868 5.12132C9.31607 4.55871 9 3.79565 9 3H7ZM12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8Z" />
    </Svg>
  );
};
