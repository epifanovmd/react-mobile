import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarDefrostRearIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 18.3C10 20.5 7.9 22.5 7.7 22.7C7.5 22.9 7.2 23 7 23C6.7 23 6.5 22.9 6.2 22.6C5.9 22.2 5.9 21.6 6.3 21.2C6.8 20.8 8 19.4 8 18.3C8 17.7 7.6 17.1 7.2 16.4C6.6 15.6 6 14.6 6 13.4C6 11.1 7.3 10.2 7.5 10.1C7.9 9.9 8.6 10 8.8 10.4C9.1 10.9 9 11.5 8.5 11.8C8.5 11.8 8 12.2 8 13.4C8 14.1 8.4 14.7 8.8 15.3C9.4 16.1 10 17.1 10 18.3ZM12 13.4C12 12.2 12.5 11.8 12.5 11.8C13 11.5 13.1 10.9 12.8 10.4C12.5 9.9 11.9 9.8 11.4 10.1C11.2 10.2 9.9 11.1 9.9 13.4C9.9 14.6 10.5 15.6 11.1 16.4C11.5 17.1 11.9 17.7 11.9 18.3C11.9 19.4 10.7 20.8 10.2 21.2C9.8 21.6 9.8 22.2 10.1 22.6C10.3 22.8 10.6 22.9 10.8 22.9C11.2 23 11.5 22.9 11.7 22.7C11.9 22.5 14 20.5 14 18.3C14 17.1 13.4 16.1 12.8 15.3C12.4 14.6 12 14 12 13.4ZM20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H5V16H4V5H20V16H19V18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM16.2 13.5C16.2 12.3 16.7 11.9 16.7 11.9C17.1 11.6 17.3 11 17 10.5C16.7 10.1 16.1 9.9 15.6 10.2C15.4 10.3 14.1 11.2 14.1 13.5C14.1 14.7 14.8 15.7 15.3 16.5C15.7 17.2 16.1 17.8 16.1 18.4C16.1 19.5 14.9 20.9 14.4 21.3C14 21.7 13.9 22.3 14.3 22.7C14.5 22.9 14.7 23 15 23C15.2 23 15.5 22.9 15.9 22.8C16.1 22.6 18.2 20.6 18.2 18.4C18.2 17.2 17.5 16.2 17 15.4C16.6 14.7 16.2 14.1 16.2 13.5Z" />
    </Svg>
  );
};
