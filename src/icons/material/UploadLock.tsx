import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UploadLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 22H17C16.5 22 16 21.5 16 21V17C16 16.5 16.5 16 17 16V14.5C17 13.1 18.1 12 19.5 12C20.9 12 22 13.1 22 14.5V16C22.5 16 23 16.5 23 17V21C23 21.5 22.5 22 22 22ZM14 20H5V18H14V20ZM21 16V14.5C21 13.7 20.3 13 19.5 13C18.7 13 18 13.7 18 14.5V16H21ZM15 16H9V10H5L12 3L19 10H15V16Z" />
    </Svg>
  );
};
