import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Signal5gIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C15.2044 4.5 14.4413 4.81607 13.8787 5.37868C13.3161 5.94129 13 6.70435 13 7.5V16.5C13 17.2956 13.3161 18.0587 13.8787 18.6213C14.4413 19.1839 15.2044 19.5 16 19.5H19C19.7956 19.5 20.5587 19.1839 21.1213 18.6213C21.6839 18.0587 22 17.2956 22 16.5ZM10 4.5H3V12V13.5H7V16.5H3V19.5H8.5C8.89782 19.5 9.27936 19.342 9.56066 19.0607C9.84196 18.7794 10 18.3978 10 18V12C10 11.6022 9.84196 11.2206 9.56066 10.9393C9.27936 10.658 8.89782 10.5 8.5 10.5H6V7.5H10V4.5Z" />
    </Svg>
  );
};
