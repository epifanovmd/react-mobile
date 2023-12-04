import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MessageTextLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5 0C19.837 0 19.2011 0.263392 18.7322 0.732233C18.2634 1.20107 18 1.83696 18 2.5V3C17.7348 3 17.4804 3.10536 17.2929 3.29289C17.1054 3.48043 17 3.73478 17 4V8C17 8.26522 17.1054 8.51957 17.2929 8.70711C17.4804 8.89464 17.7348 9 18 9H23C23.2652 9 23.5196 8.89464 23.7071 8.70711C23.8946 8.51957 24 8.26522 24 8V4C24 3.73478 23.8946 3.48043 23.7071 3.29289C23.5196 3.10536 23.2652 3 23 3V2.5C23 1.83696 22.7366 1.20107 22.2678 0.732233C21.7989 0.263392 21.163 0 20.5 0V0ZM20.5 1C20.8978 1 21.2794 1.15804 21.5607 1.43934C21.842 1.72064 22 2.10218 22 2.5V3H19V2.5C19 2.10218 19.158 1.72064 19.4393 1.43934C19.7206 1.15804 20.1022 1 20.5 1ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V22L6 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V11H17C15.89 11 15 10.11 15 9V2H4ZM6 6H13V8H6V6ZM6 9H13V11H6V9ZM6 12H14V14H6V12Z" />
    </Svg>
  );
};
