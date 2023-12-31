import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RadioactiveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 9.9993C12.5304 9.9993 13.0391 10.21 13.4142 10.5851C13.7893 10.9602 14 11.4689 14 11.9993C14 12.5297 13.7893 13.0384 13.4142 13.4135C13.0391 13.7886 12.5304 13.9993 12 13.9993C11.4696 13.9993 10.9609 13.7886 10.5858 13.4135C10.2107 13.0384 10 12.5297 10 11.9993C10 11.4689 10.2107 10.9602 10.5858 10.5851C10.9609 10.21 11.4696 9.9993 12 9.9993ZM12 21.9993C10.05 21.9993 8.22 21.4393 6.69 20.4693L10 15.4693C10.6 15.8093 11.28 15.9993 12 15.9993C12.72 15.9993 13.4 15.8093 14 15.4693L17.31 20.4693C15.78 21.4393 13.95 21.9993 12 21.9993ZM2 11.9993C2 7.8593 4.5 4.2993 8.11 2.7793L10.34 8.3593C8.96 8.9993 8 10.3793 8 11.9993H2ZM16 11.9993C16 10.3793 15.04 8.9993 13.66 8.3593L15.89 2.7793C19.5 4.2993 22 7.8593 22 11.9993H16Z" />
    </Svg>
  );
};
