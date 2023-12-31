import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageRIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4.28906C6.5 4.28906 2 7.28906 2 10.9991C2 14.2791 5.56 16.9991 10.24 17.5791V19.7091H13.65V17.5891C14.5 17.4991 15.29 17.3391 16.04 17.1091L17.42 19.7091H21.28L18.96 15.7991C20.83 14.5791 22 12.8691 22 10.9991C22 7.28906 17.5 4.28906 12 4.28906ZM13.53 6.90906C17.73 6.90906 20.83 8.30906 20.83 11.4991C20.83 13.2091 19.91 14.4091 18.41 15.1491C18.32 15.0991 18.24 15.0491 18.19 14.9991C17.83 14.8391 17.23 14.6591 17.23 14.6591C17.23 14.6591 20.21 14.4391 20.21 11.4691C20.21 8.49906 17.09 8.44906 17.09 8.44906H10.24V15.6091C7.69 14.8691 5.93 13.2991 5.93 11.4991C5.93 8.95906 9.33 6.90906 13.53 6.90906ZM13.68 10.8891H15.75C15.75 10.8891 16.7 10.8391 16.7 11.8291C16.7 12.7991 15.75 12.7991 15.75 12.7991H13.68V10.8891ZM13.65 15.2991H14.57C14.75 15.2991 14.84 15.3491 15 15.4991C15.13 15.5991 15.27 15.7891 15.39 15.9591C14.84 16.0291 14.26 16.0591 13.65 16.0591V15.2991Z" />
    </Svg>
  );
};
