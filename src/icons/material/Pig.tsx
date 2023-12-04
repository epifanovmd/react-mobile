import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PigIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.50002 9.00038C9.10219 9.00038 8.72066 9.15842 8.43936 9.43972C8.15805 9.72103 8.00002 10.1026 8.00002 10.5004C8.00002 10.8982 8.15805 11.2797 8.43936 11.561C8.72066 11.8423 9.10219 12.0004 9.50002 12.0004C9.89784 12.0004 10.2794 11.8423 10.5607 11.561C10.842 11.2797 11 10.8982 11 10.5004C11 10.1026 10.842 9.72103 10.5607 9.43972C10.2794 9.15842 9.89784 9.00038 9.50002 9.00038ZM14.5 9.00038C14.1022 9.00038 13.7207 9.15842 13.4394 9.43972C13.1581 9.72103 13 10.1026 13 10.5004C13 10.8982 13.1581 11.2797 13.4394 11.561C13.7207 11.8423 14.1022 12.0004 14.5 12.0004C14.8978 12.0004 15.2794 11.8423 15.5607 11.561C15.842 11.2797 16 10.8982 16 10.5004C16 10.1026 15.842 9.72103 15.5607 9.43972C15.2794 9.15842 14.8978 9.00038 14.5 9.00038ZM12 4.00038L12.68 4.03038C13.62 3.24038 14.82 2.59038 15.72 2.35038C17.59 1.85038 20.88 2.23038 21.31 3.83038C21.62 5.00038 20.6 6.45038 19.03 7.38038C20.26 8.92038 21 10.8704 21 13.0004C21 15.3873 20.0518 17.6765 18.364 19.3643C16.6761 21.0522 14.387 22.0004 12 22.0004C9.61307 22.0004 7.32388 21.0522 5.63605 19.3643C3.94823 17.6765 3.00002 15.3873 3.00002 13.0004C3.00002 10.8704 3.74002 8.92038 4.97002 7.38038C3.40002 6.45038 2.38002 5.00038 2.69002 3.83038C3.12002 2.23038 6.41002 1.85038 8.28002 2.35038C9.18002 2.59038 10.38 3.24038 11.32 4.03038L12 4.00038ZM10 16.0004C10.2652 16.0004 10.5196 16.1057 10.7071 16.2933C10.8947 16.4808 11 16.7352 11 17.0004C11 17.2656 10.8947 17.52 10.7071 17.7075C10.5196 17.895 10.2652 18.0004 10 18.0004C9.7348 18.0004 9.48045 17.895 9.29291 17.7075C9.10537 17.52 9.00002 17.2656 9.00002 17.0004C9.00002 16.7352 9.10537 16.4808 9.29291 16.2933C9.48045 16.1057 9.7348 16.0004 10 16.0004ZM14 16.0004C14.2652 16.0004 14.5196 16.1057 14.7071 16.2933C14.8947 16.4808 15 16.7352 15 17.0004C15 17.2656 14.8947 17.52 14.7071 17.7075C14.5196 17.895 14.2652 18.0004 14 18.0004C13.7348 18.0004 13.4804 17.895 13.2929 17.7075C13.1054 17.52 13 17.2656 13 17.0004C13 16.7352 13.1054 16.4808 13.2929 16.2933C13.4804 16.1057 13.7348 16.0004 14 16.0004ZM12 13.0004C9.24002 13.0004 7.00002 15.3404 7.00002 17.0004C7.00002 18.6604 9.24002 20.0004 12 20.0004C14.76 20.0004 17 18.6604 17 17.0004C17 15.3404 14.76 13.0004 12 13.0004ZM7.76002 4.28038C7.31002 4.16038 4.59002 4.35038 4.59002 4.35038C4.59002 4.35038 6.80002 6.10038 7.24002 6.22038C7.69002 6.34038 9.77002 6.43038 9.91002 5.90038C10.06 5.36038 8.20002 4.40038 7.76002 4.28038ZM16.24 4.28038C15.8 4.40038 13.94 5.36038 14.09 5.90038C14.23 6.43038 16.31 6.34038 16.76 6.22038C17.2 6.10038 19.41 4.35038 19.41 4.35038C19.41 4.35038 16.69 4.16038 16.24 4.28038Z" />
    </Svg>
  );
};
