import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageHaskellIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.08008 19L6.75008 12L2.08008 5H5.58008L10.2501 12L5.58008 19H2.08008ZM6.75008 19L11.4201 12L6.75008 5H10.2501L19.5901 19H16.0901L13.1701 14.63L10.2501 19H6.75008ZM18.0301 14.92L16.5001 12.58H21.9201V14.92H18.0301ZM15.7001 11.42L14.1401 9.08H21.9201V11.42H15.7001Z" />
    </Svg>
  );
};
