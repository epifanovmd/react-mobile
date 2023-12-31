import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarWindshieldIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.6299 15.4998L20.2099 5.84979C20.1512 5.61723 20.0108 5.41353 19.8144 5.27586C19.618 5.13818 19.3786 5.07569 19.1399 5.09979C17.7999 5.23979 14.1399 5.49979 11.9999 5.49979C9.85994 5.49979 6.19994 5.23979 4.85994 5.09979C4.62128 5.07569 4.38192 5.13818 4.1855 5.27586C3.98908 5.41353 3.84869 5.61723 3.78994 5.84979L1.36994 15.4998C1.31691 15.6997 1.30582 15.9085 1.33736 16.113C1.3689 16.3174 1.44239 16.5131 1.55321 16.6878C1.66403 16.8625 1.80979 17.0124 1.98132 17.128C2.15285 17.2437 2.34644 17.3226 2.54994 17.3598C5.6788 17.8157 8.83817 18.0297 11.9999 17.9998C15.1617 18.0297 18.3211 17.8157 21.4499 17.3598C21.6534 17.3226 21.847 17.2437 22.0186 17.128C22.1901 17.0124 22.3358 16.8625 22.4467 16.6878C22.5575 16.5131 22.631 16.3174 22.6625 16.113C22.6941 15.9085 22.683 15.6997 22.6299 15.4998Z" />
    </Svg>
  );
};
