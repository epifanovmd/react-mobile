import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScrewRoundTopIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.5 17V19L12 22L10.5 19L13.5 17ZM14.5 6.3L13.5 7V6H10.5V9L9.5 9.7V10.7L14.5 7.4V6.3ZM14.5 10.3L13.5 11V9L10.5 11V13L9.5 13.7V14.7L14.5 11.4V10.3ZM14.5 14.3L13.5 15V13L10.5 15V17L9.5 17.7V18.7L14.5 15.4V14.3ZM7 5H17C17 5 16 2 12 2C8 2 7 5 7 5Z" />
    </Svg>
  );
};
