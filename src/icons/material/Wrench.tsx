import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WrenchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.6999 19.0017L13.5999 9.90172C14.4999 7.60172 13.9999 4.90172 12.0999 3.00172C10.0999 1.00172 7.09994 0.601721 4.69994 1.70172L8.99994 6.00172L5.99994 9.00172L1.59994 4.70172C0.399939 7.10172 0.899939 10.1017 2.89994 12.1017C4.79994 14.0017 7.49994 14.5017 9.79994 13.6017L18.8999 22.7017C19.2999 23.1017 19.8999 23.1017 20.2999 22.7017L22.5999 20.4017C23.0999 20.0017 23.0999 19.3017 22.6999 19.0017Z" />
    </Svg>
  );
};
