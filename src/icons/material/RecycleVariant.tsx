import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RecycleVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.16995 7.90923L8.89995 8.90923L12.0799 3.41923L14.3299 7.30923L11.7299 8.80923L17.1899 10.2692L18.6599 4.80923L16.0599 6.30923L13.8099 2.40923C13.2599 1.44923 12.0299 1.11923 11.0799 1.67923C10.8099 1.82923 10.5799 2.04923 10.4099 2.30923L7.16995 7.90923ZM9.99995 19.9992V17.9992H3.65995L5.89995 14.0992L8.49995 15.5992L7.03995 10.1392L1.56995 11.5992L4.16995 13.0992L1.91995 16.9992C1.36995 17.9592 1.69995 19.1792 2.64995 19.7292C2.91995 19.8892 3.21995 19.9692 3.53995 19.9992H9.99995ZM19.0599 11.4992L17.3199 12.4992L20.4999 17.9992H15.9999V14.9992L11.9999 18.9992L15.9999 22.9992V19.9992H20.4999C21.6099 19.9992 22.4999 19.1092 22.4999 17.9992C22.4999 17.6892 22.4199 17.3792 22.2799 17.1092L19.0599 11.4992Z" />
    </Svg>
  );
};
