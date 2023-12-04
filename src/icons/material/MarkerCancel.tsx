import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MarkerCancelIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.5 13.0004C20 13.0004 22 15.0004 22 17.5004C22 20.0004 20 22.0004 17.5 22.0004C15 22.0004 13 20.0004 13 17.5004C13 15.0004 15 13.0004 17.5 13.0004ZM17.5 14.5004C16.94 14.5004 16.42 14.6504 16 14.9204L20.08 19.0004C20.35 18.5804 20.5 18.0604 20.5 17.5004C20.5 16.7047 20.184 15.9417 19.6214 15.3791C19.0588 14.8165 18.2957 14.5004 17.5 14.5004ZM14.5 17.5004C14.5 18.296 14.8161 19.0591 15.3787 19.6217C15.9413 20.1843 16.7044 20.5004 17.5 20.5004C18.06 20.5004 18.58 20.3504 19 20.0804L14.92 16.0004C14.65 16.4204 14.5 16.9404 14.5 17.5004ZM18.5 1.15039C19 1.15039 19.5 1.34039 19.89 1.73039L22.73 4.56039C23.5 5.35039 23.5 6.61039 22.73 7.39039L18.95 11.1604C18.5 11.0604 18 11.0004 17.5 11.0004C16.67 11.0004 15.88 11.1604 15.15 11.4404L11.26 7.55039L17.07 1.73039C17.46 1.34039 17.97 1.15039 18.5 1.15039ZM10.3 8.50039L13.89 12.1004C12.15 13.2604 11 15.2504 11 17.5004C11 18.0004 11.06 18.5004 11.16 18.9504L10 20.1204C9.22004 20.8904 7.97004 20.9004 7.19004 20.1404L6.33004 21.0004H0.670044L4.36004 17.3104C3.56004 16.5004 3.56004 15.2404 4.34004 14.4604L10.3 8.50039Z" />
    </Svg>
  );
};
