import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DlnaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.38 12.5597H12.85C11.97 12.5597 11.1 12.9597 10.61 13.6097V13.5997C10.12 14.2797 9.32 14.7197 8.41 14.7197C6.92 14.7197 5.71 13.4997 5.71 11.9997C5.71 10.4997 6.92 9.30969 8.41 9.30969C9.32 9.30969 10.12 9.74969 10.61 10.4297V10.4197C11.1 11.0697 11.97 11.4997 12.85 11.4997H21.29C21.45 11.4997 22 11.3997 22 10.6697C21.26 6.42969 17.1 3.17969 12.06 3.17969C8.96 3.17969 6.19 4.40969 4.34 6.34969C4.05 6.78969 4.35 6.91969 4.63 6.95969H10.14C11 6.95969 11.89 6.53969 12.38 5.88969V5.90969C12.88 5.22969 13.67 4.77969 14.58 4.77969C16.07 4.77969 17.28 5.99969 17.28 7.49969C17.28 8.99969 16.07 10.1997 14.58 10.1997C13.67 10.1997 12.88 9.74969 12.38 9.06969V9.07969C11.89 8.43969 11 8.02969 10.14 8.02969H4.13H4.15C4.15 8.02969 3.26 7.99969 2.72 8.74969C2.3 9.41969 2 10.8497 2 11.9997C2 13.1597 2.17 14.2097 2.72 15.2697C3.19 16.0297 4.15 15.9997 4.15 15.9997H4.11H10.14C11 15.9997 11.89 15.5797 12.38 14.9297V14.9397C12.88 14.2597 13.67 13.8097 14.58 13.8097C16.07 13.8097 17.28 15.0297 17.28 16.4997C17.28 17.9997 16.07 19.2297 14.58 19.2297C13.67 19.2297 12.88 18.7797 12.38 18.0997V18.1197C11.89 17.4697 11 17.0497 10.14 17.0497H4.64C4.36 17.0897 4.06 17.2197 4.32 17.6397C6.17 19.5797 8.95 20.8197 12.06 20.8197C17.11 20.8197 21.28 17.5697 22 13.3097C22 12.7197 21.59 12.5797 21.38 12.5597Z" />
    </Svg>
  );
};
