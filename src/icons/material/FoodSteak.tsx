import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodSteakIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.8999 2C7.99991 2 4.89991 5.4 4.99991 9.3C5.09991 11.9 6.59991 14.1 8.69991 15.2C10.0999 15.9 10.9999 17.3 10.9999 18.8V19C10.9999 20.7 12.2999 22 13.9999 22C17.9999 22 18.9999 17 18.9999 9C18.9999 9 18.9999 2 11.8999 2ZM13.9999 20C13.3999 20 12.9999 19.6 12.9999 19V18.8C12.9999 16.6 11.6999 14.5 9.69991 13.4C8.09991 12.6 7.09991 11 6.99991 9.2C6.99991 7.9 7.49991 6.5 8.39991 5.5C9.29991 4.5 10.5999 4 11.7999 4C16.6999 4 16.9999 8.2 16.9999 9C16.9999 18.9 15.2999 20 13.9999 20ZM15.7999 7.6L8.29991 10.3C8.09991 10 7.99991 9.6 7.99991 9.1C7.99991 8.4 8.19991 7.8 8.49991 7.1L13.6999 5.2C14.8999 5.8 15.4999 6.7 15.7999 7.6ZM12.8999 15.1L15.6999 14.1C15.5999 15.6 15.2999 16.7 15.0999 17.4L13.7999 17.9C13.7999 16.9 13.4999 16 12.8999 15.1ZM15.9999 9.2C15.9999 10.4 15.9999 11.5 15.8999 12.4L11.8999 13.9C11.3999 13.4 10.7999 12.9 10.0999 12.6C9.69991 12.4 9.29991 12.1 8.99991 11.8L15.9999 9.2Z" />
    </Svg>
  );
};
