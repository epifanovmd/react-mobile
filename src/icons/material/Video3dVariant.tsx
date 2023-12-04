import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Video3dVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 10V14C14 14.1326 13.9473 14.2598 13.8536 14.3536C13.7598 14.4473 13.6326 14.5 13.5 14.5H12.5V9.5H13.5C13.6326 9.5 13.7598 9.55268 13.8536 9.64645C13.9473 9.74021 14 9.86739 14 10ZM21 6.5V17.5L17 13.5V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H16C16.2652 6 16.5196 6.10536 16.7071 6.29289C16.8946 6.48043 17 6.73478 17 7V10.5L21 6.5ZM9.5 9.5C9.5 9.10218 9.34196 8.72064 9.06066 8.43934C8.77936 8.15804 8.39782 8 8 8H4.5V9.5H8V11.25H5.5V12.75H8V14.5H4.5V16H8C8.39782 16 8.77936 15.842 9.06066 15.5607C9.34196 15.2794 9.5 14.8978 9.5 14.5V9.5ZM15.5 9.5C15.5 9.10218 15.342 8.72064 15.0607 8.43934C14.7794 8.15804 14.3978 8 14 8H11V16H14C14.3978 16 14.7794 15.842 15.0607 15.5607C15.342 15.2794 15.5 14.8978 15.5 14.5" />
    </Svg>
  );
};
