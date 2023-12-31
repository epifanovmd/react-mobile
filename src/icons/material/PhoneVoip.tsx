import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneVoipIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 17V19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H22V22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V17H13ZM23.7 7.67C23.88 7.85 24 8.09 24 8.37C24 8.65 23.89 8.9 23.71 9.08L21.23 11.56C21.05 11.74 20.8 11.85 20.5 11.85C20.25 11.85 20 11.75 19.82 11.57C19 10.84 18.13 10.21 17.15 9.72C16.82 9.56 16.59 9.21 16.59 8.82V5.72C15.14 5.25 13.59 5 12 5C10.4 5 8.85 5.25 7.4 5.73V8.83C7.4 9.23 7.17 9.57 6.84 9.73C5.87 10.22 4.97 10.84 4.18 11.58C4 11.75 3.75 11.86 3.5 11.86C3.2 11.86 2.95 11.75 2.77 11.57L0.29 9.09C0.11 8.91 0 8.66 0 8.38C0 8.1 0.11 7.85 0.29 7.67C3.34 4.78 7.46 3 12 3C16.53 3 20.65 4.78 23.7 7.67ZM11 10V15H10V10H11ZM12 10H15V13H13V15H12V10ZM14 12V11H13V12H14Z" />
    </Svg>
  );
};
