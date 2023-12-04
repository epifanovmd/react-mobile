import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElephantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.5 15.5C19.5 15.6326 19.4473 15.7598 19.3536 15.8536C19.2598 15.9473 19.1326 16 19 16C18.8674 16 18.7402 15.9473 18.6464 15.8536C18.5527 15.7598 18.5 15.6326 18.5 15.5V8.5C18.5 6.57 16.43 5 14.5 5H6C4.93913 5 3.92172 5.42143 3.17157 6.17157C2.42143 6.92172 2 7.93913 2 9V19H6V15H11V19H15V14.5C15 14.3674 15.0527 14.2402 15.1464 14.1464C15.2402 14.0527 15.3674 14 15.5 14C15.6326 14 15.7598 14.0527 15.8536 14.1464C15.9473 14.2402 16 14.3674 16 14.5V16C16 16.7956 16.3161 17.5587 16.8787 18.1213C17.4413 18.6839 18.2044 19 19 19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16V14H19.5V15.5Z" />
    </Svg>
  );
};
