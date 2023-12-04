import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AnchorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C11.2044 2 10.4413 2.31607 9.87868 2.87868C9.31607 3.44129 9 4.20435 9 5C8.99967 5.62065 9.19186 6.22613 9.55006 6.73298C9.90826 7.23984 10.4148 7.62312 11 7.83V9H8V11H11V19.92C10.26 19.79 9.5 19.58 8.79 19.27C8.05 18.95 7.4 18.56 6.82 18.09C6.24 17.62 5.78 17.11 5.44 16.55L7 15L3 12V15C3 15.97 3.27 16.88 3.82 17.72C4.37 18.56 5.09 19.31 6 19.95C6.87 20.59 7.84 21.09 8.88 21.45C9.93 21.81 10.97 22 12 22C13.03 22 14.07 21.8 15.12 21.44C16.16 21.08 17.13 20.58 18 19.95C18.92 19.31 19.63 18.57 20.18 17.72C20.73 16.88 21 15.97 21 15V12L17 15L18.56 16.55C18.22 17.11 17.76 17.62 17.18 18.09C16.6 18.56 15.95 18.95 15.21 19.27C14.5 19.58 13.74 19.79 13 19.92V11H16V9H13V7.82C13.5835 7.61369 14.089 7.23193 14.4471 6.72707C14.8051 6.2222 14.9983 5.61894 15 5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7956 2 12 2ZM12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z" />
    </Svg>
  );
};
