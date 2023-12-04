import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ImageSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.5 2C18 2 20 4 20 6.5C20 7.38 19.75 8.21 19.31 8.9L22.39 12L21 13.39L17.88 10.32C17.19 10.75 16.37 11 15.5 11C13 11 11 9 11 6.5C11 4 13 2 15.5 2ZM15.5 4C14.837 4 14.2011 4.26339 13.7322 4.73223C13.2634 5.20107 13 5.83696 13 6.5C13 7.16304 13.2634 7.79893 13.7322 8.26777C14.2011 8.73661 14.837 9 15.5 9C16.163 9 16.7989 8.73661 17.2678 8.26777C17.7366 7.79893 18 7.16304 18 6.5C18 5.83696 17.7366 5.20107 17.2678 4.73223C16.7989 4.26339 16.163 4 15.5 4ZM7.5 14.5L4 19H18L13.5 13L10 17.5L7.5 14.5ZM20 20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.5C9.18 4.77 9 5.61 9 6.5C9 8.22391 9.68482 9.87721 10.9038 11.0962C12.1228 12.3152 13.7761 13 15.5 13C16.18 13 16.84 12.89 17.46 12.7L20 15.24V20Z" />
    </Svg>
  );
};
