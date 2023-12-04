import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AndroidMessagesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V8.94L2.23 5.64C2.09 5.47 2 5.24 2 5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20ZM8.5 7C8.36739 7 8.24021 7.05268 8.14645 7.14645C8.05268 7.24021 8 7.36739 8 7.5V8.5C8 8.63261 8.05268 8.75979 8.14645 8.85355C8.24021 8.94732 8.36739 9 8.5 9H18.5C18.6326 9 18.7598 8.94732 18.8536 8.85355C18.9473 8.75979 19 8.63261 19 8.5V7.5C19 7.36739 18.9473 7.24021 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7H8.5ZM8.5 11C8.36739 11 8.24021 11.0527 8.14645 11.1464C8.05268 11.2402 8 11.3674 8 11.5V12.5C8 12.6326 8.05268 12.7598 8.14645 12.8536C8.24021 12.9473 8.36739 13 8.5 13H18.5C18.6326 13 18.7598 12.9473 18.8536 12.8536C18.9473 12.7598 19 12.6326 19 12.5V11.5C19 11.3674 18.9473 11.2402 18.8536 11.1464C18.7598 11.0527 18.6326 11 18.5 11H8.5ZM8.5 15C8.36739 15 8.24021 15.0527 8.14645 15.1464C8.05268 15.2402 8 15.3674 8 15.5V16.5C8 16.6326 8.05268 16.7598 8.14645 16.8536C8.24021 16.9473 8.36739 17 8.5 17H13.5C13.6326 17 13.7598 16.9473 13.8536 16.8536C13.9473 16.7598 14 16.6326 14 16.5V15.5C14 15.3674 13.9473 15.2402 13.8536 15.1464C13.7598 15.0527 13.6326 15 13.5 15H8.5Z" />
    </Svg>
  );
};
