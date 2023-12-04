import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ResponsiveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 6V16H9V12C9 11.4696 9.21071 10.9609 9.58579 10.5858C9.96086 10.2107 10.4696 10 11 10H16C16.5304 10 17.0391 10.2107 17.4142 10.5858C17.7893 10.9609 18 11.4696 18 12V16H20V6H4ZM0 20V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H24V20H18C18 21.11 17.1 22 16 22H11C10.4696 22 9.96086 21.7893 9.58579 21.4142C9.21071 21.0391 9 20.5304 9 20H0ZM11.5 20C11.3674 20 11.2402 20.0527 11.1464 20.1464C11.0527 20.2402 11 20.3674 11 20.5C11 20.6326 11.0527 20.7598 11.1464 20.8536C11.2402 20.9473 11.3674 21 11.5 21C11.6326 21 11.7598 20.9473 11.8536 20.8536C11.9473 20.7598 12 20.6326 12 20.5C12 20.3674 11.9473 20.2402 11.8536 20.1464C11.7598 20.0527 11.6326 20 11.5 20ZM15.5 20C15.3674 20 15.2402 20.0527 15.1464 20.1464C15.0527 20.2402 15 20.3674 15 20.5C15 20.6326 15.0527 20.7598 15.1464 20.8536C15.2402 20.9473 15.3674 21 15.5 21C15.6326 21 15.7598 20.9473 15.8536 20.8536C15.9473 20.7598 16 20.6326 16 20.5C16 20.3674 15.9473 20.2402 15.8536 20.1464C15.7598 20.0527 15.6326 20 15.5 20ZM13 20V21H14V20H13ZM11 12V19H16V12H11Z" />
    </Svg>
  );
};
