import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShakerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 15.9997C7 16.5497 6.55 16.9997 6 16.9997C5.45 16.9997 5 16.5497 5 15.9997C5 15.4497 5.45 14.9997 6 14.9997C6.55 14.9997 7 15.4497 7 15.9997ZM9 15.9997C8.45 15.9997 8 16.4497 8 16.9997C8 17.5497 8.45 17.9997 9 17.9997C9.55 17.9997 10 17.5497 10 16.9997C10 16.4497 9.55 15.9997 9 15.9997ZM4 17.9997C3.45 17.9997 3 18.4497 3 18.9997C3 19.5497 3.45 19.9997 4 19.9997C4.55 19.9997 5 19.5497 5 18.9997C5 18.4497 4.55 17.9997 4 17.9997ZM7 18.9997C6.45 18.9997 6 19.4497 6 19.9997C6 20.5497 6.45 20.9997 7 20.9997C7.55 20.9997 8 20.5497 8 19.9997C8 19.4497 7.55 18.9997 7 18.9997ZM15.33 2.71965L9.8 9.64965L13.34 13.1897L20.28 7.66965C21.18 6.90965 21.25 5.53965 20.41 4.69965L18.3 2.58965C17.46 1.74965 16.09 1.81965 15.33 2.71965ZM8.39 12.4997L10.5 14.5997C10.9 14.9997 11.54 14.9997 11.93 14.5997L12.63 13.8997L9.1 10.3597L8.39 11.0697C8 11.4597 8 12.0897 8.39 12.4997Z" />
    </Svg>
  );
};
