import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterMenuOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.9999 18.88C12.018 19.0313 12.0013 19.1847 11.951 19.3286C11.9007 19.4724 11.8183 19.6029 11.7099 19.71C11.5225 19.8962 11.2691 20.0008 11.0049 20.0008C10.7407 20.0008 10.4873 19.8962 10.2999 19.71L6.29989 15.71C6.18829 15.6028 6.1031 15.4711 6.05104 15.3253C5.99899 15.1795 5.98147 15.0237 5.99989 14.87V9.75L1.20989 3.62C1.0475 3.41153 0.974221 3.14726 1.00607 2.88493C1.03793 2.6226 1.17232 2.38355 1.37989 2.22C1.55583 2.07884 1.77432 2.00131 1.99989 2H15.9999C16.2255 2.00131 16.4439 2.07884 16.6199 2.22C16.8275 2.38355 16.9618 2.6226 16.9937 2.88493C17.0256 3.14726 16.9523 3.41153 16.7899 3.62L11.9999 9.75V18.88ZM3.99989 4L7.99989 9.06V14.58L9.99989 16.58V9.05L13.9999 4H3.99989ZM12.9999 16L17.9999 21L22.9999 16H12.9999Z" />
    </Svg>
  );
};
