import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterMenuIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.9999 11L16.7599 3.62C16.9223 3.41153 16.9956 3.14726 16.9637 2.88493C16.9318 2.6226 16.7975 2.38355 16.5899 2.22C16.422 2.08505 16.2151 2.00789 15.9999 2H1.99989C1.77432 2.00131 1.55583 2.07884 1.37989 2.22C1.17232 2.38355 1.03793 2.6226 1.00607 2.88493C0.974221 3.14726 1.0475 3.41153 1.20989 3.62L6.99989 11V16.87C6.98179 17.0213 6.99852 17.1747 7.04878 17.3186C7.09904 17.4624 7.18151 17.5929 7.28989 17.7L9.28989 19.7C9.47725 19.8863 9.7307 19.9908 9.99489 19.9908C10.2591 19.9908 10.5125 19.8863 10.6999 19.7C10.8101 19.5938 10.8944 19.4638 10.9464 19.3199C10.9984 19.176 11.0167 19.0221 10.9999 18.87V11ZM12.9999 16L17.9999 21L22.9999 16H12.9999Z" />
    </Svg>
  );
};
