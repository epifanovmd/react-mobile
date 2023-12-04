import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacCancerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4.00106C6.5 4.00106 2 7.58106 2 12.0011C2 14.1211 3.65 15.8711 5.76 16.0011H6C7.06087 16.0011 8.07828 15.5796 8.82843 14.8295C9.57857 14.0793 10 13.0619 10 12.0011C10 10.9402 9.57857 9.92277 8.82843 9.17263C8.07828 8.42248 7.06087 8.00106 6 8.00106H5.76C7.44 6.41106 9.69 5.55106 12 5.60106C13.77 5.58106 15.5 6.07106 17 7.00106L18.25 5.75106C16.38 4.58106 14.21 3.97106 12 4.00106ZM6 10.0011C6.53043 10.0011 7.03914 10.2118 7.41421 10.5868C7.78929 10.9619 8 11.4706 8 12.0011C8 13.1111 7.08 14.0011 6 14.0011C4.96 14.0011 4.1 13.2211 4 12.2011C4 12.0711 4 11.9311 4 11.8011C4.1 10.7711 4.97 10.0011 6 10.0011ZM18.24 8.00106H18C16.9391 8.00106 15.9217 8.42248 15.1716 9.17263C14.4214 9.92277 14 10.9402 14 12.0011C14 13.0619 14.4214 14.0793 15.1716 14.8295C15.9217 15.5796 16.9391 16.0011 18 16.0011H18.24C16.56 17.5911 14.31 18.4511 12 18.4011C10.23 18.4211 8.5 17.9311 7 17.0011L5.76 18.2411C7.63 19.4111 9.79 20.0011 12 20.0011C17.5 20.0011 22 16.4211 22 12.0011C22 9.88106 20.35 8.13106 18.24 8.00106ZM18 14.0011C17.4696 14.0011 16.9609 13.7903 16.5858 13.4153C16.2107 13.0402 16 12.5315 16 12.0011C16 10.8911 16.92 10.0011 18 10.0011C19.04 10.0011 19.9 10.7811 20 11.8011C20 11.9311 20 12.0711 20 12.2011C19.9 13.2311 19.03 14.0011 18 14.0011Z" />
    </Svg>
  );
};
