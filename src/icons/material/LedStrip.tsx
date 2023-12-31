import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LedStripIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.81006 8.46055L14.8301 20.5005L15.5401 19.7805L16.9501 21.1905L18.3601 19.7805L16.9501 18.3605L18.3601 16.9505L19.7801 18.3605L21.1901 16.9505L19.7801 15.5405L20.5001 14.8305L8.46006 2.81055L2.81006 8.46055ZM5.64006 8.46055L8.46006 5.64055L17.6601 14.8305L14.8301 17.6605L5.64006 8.46055ZM7.05006 8.46055L8.46006 9.88055L9.88006 8.46055L8.46006 7.05055L7.05006 8.46055ZM9.17006 10.5905L10.5901 12.0005L12.0001 10.5905L10.5901 9.17055L9.17006 10.5905ZM11.2901 12.7105L12.7101 14.1205L14.1201 12.7105L12.7101 11.2905L11.2901 12.7105ZM13.4101 14.8305L14.8301 16.2405L16.2401 14.8305L14.8301 13.4105L13.4101 14.8305Z" />
    </Svg>
  );
};
