import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 16.0001V18.0001C17 18.5501 16.53 19.0001 16 19.0001H12C11.42 19.0001 11 18.5501 11 18.0001V16.0001C8.76998 14.3401 8.31998 11.2101 9.99998 9.0001C11.68 6.7901 14.77 6.3401 17 8.0001C19.23 9.6601 19.63 12.7901 18 15.0001C17.69 15.3801 17.35 15.7201 17 16.0001ZM16 20.0001H12V21.0001C12 21.5501 12.42 22.0001 13 22.0001H15C15.53 22.0001 16 21.5501 16 21.0001V20.0001ZM7.65998 15.0001H6.99998V16.0001C6.99998 16.5501 7.41998 17.0001 7.99998 17.0001H8.99998V16.8801C8.43998 16.3301 7.99998 15.7001 7.65998 15.0001ZM13.58 5.0001C12.46 2.4701 9.49998 1.3301 6.99998 2.4501C4.49998 3.5701 3.30998 6.5001 4.42998 9.0401C4.76998 9.8101 5.29998 10.5001 5.99998 11.0001V13.0001C5.99998 13.5501 6.41998 14.0001 6.99998 14.0001H7.27998C7.06998 13.3501 6.96998 12.6801 6.99998 12.0001C6.96998 8.2901 9.86998 5.2101 13.58 5.0001Z" />
    </Svg>
  );
};
