import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SyncOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0001 4H14.0001V10L16.2401 7.76C17.3201 8.85 18.0001 10.34 18.0001 12C18.0001 13 17.7501 13.94 17.3201 14.77L18.7801 16.23C19.5501 15 20.0001 13.56 20.0001 12C20.0001 9.79 19.0901 7.8 17.6401 6.36L20.0001 4ZM2.86011 5.41L5.22011 7.77C4.45011 9 4.00011 10.44 4.00011 12C4.00011 14.21 4.91011 16.2 6.36011 17.64L4.00011 20H10.0001V14L7.76011 16.24C6.68011 15.15 6.00011 13.66 6.00011 12C6.00011 11 6.25011 10.06 6.68011 9.23L14.7601 17.31C14.5001 17.44 14.2601 17.56 14.0001 17.65V19.74C14.7901 19.53 15.5401 19.2 16.2201 18.78L18.5801 21.14L19.8501 19.87L4.14011 4.14L2.86011 5.41ZM10.0001 6.35V4.26C9.20011 4.47 8.45011 4.8 7.77011 5.22L9.23011 6.68C9.50011 6.56 9.73011 6.44 10.0001 6.35Z" />
    </Svg>
  );
};
