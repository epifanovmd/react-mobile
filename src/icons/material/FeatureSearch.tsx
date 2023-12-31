import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FeatureSearchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.5C9.2 4.8 9 5.6 9 6.5C9 10.1 11.9 13 15.5 13C16.3 13 17 12.9 17.6 12.6L20 15V20ZM19.3 8.9C19.7 8.2 20 7.4 20 6.5C20 4 18 2 15.5 2C13 2 11 4 11 6.5C11 9 13 11 15.5 11C16.4 11 17.2 10.7 17.9 10.3L21 13.4L22.4 12L19.3 8.9ZM15.5 9C14.1 9 13 7.9 13 6.5C13 5.1 14.1 4 15.5 4C16.9 4 18 5.1 18 6.5C18 7.9 16.9 9 15.5 9Z" />
    </Svg>
  );
};
