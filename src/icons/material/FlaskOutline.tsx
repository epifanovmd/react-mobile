import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlaskOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19C19 18.79 18.93 18.59 18.82 18.43L13 8.35V4H11V8.35L5.18 18.43C5.07 18.59 5 18.79 5 19ZM6 22C5.20435 22 4.44129 21.6839 3.87868 21.1213C3.31607 20.5587 3 19.7956 3 19C3 18.4 3.18 17.84 3.5 17.37L9 7.81V6C8.73478 6 8.48043 5.89464 8.29289 5.70711C8.10536 5.51957 8 5.26522 8 5V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V5C16 5.26522 15.8946 5.51957 15.7071 5.70711C15.5196 5.89464 15.2652 6 15 6V7.81L20.5 17.37C20.82 17.84 21 18.4 21 19C21 19.7956 20.6839 20.5587 20.1213 21.1213C19.5587 21.6839 18.7956 22 18 22H6ZM13 16L14.34 14.66L16.27 18H7.73L10.39 13.39L13 16ZM12.5 12C12.6326 12 12.7598 12.0527 12.8536 12.1464C12.9473 12.2402 13 12.3674 13 12.5C13 12.6326 12.9473 12.7598 12.8536 12.8536C12.7598 12.9473 12.6326 13 12.5 13C12.3674 13 12.2402 12.9473 12.1464 12.8536C12.0527 12.7598 12 12.6326 12 12.5C12 12.3674 12.0527 12.2402 12.1464 12.1464C12.2402 12.0527 12.3674 12 12.5 12Z" />
    </Svg>
  );
};
