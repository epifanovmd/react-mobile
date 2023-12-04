import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.5 0C21.163 0 21.7989 0.263392 22.2678 0.732233C22.7366 1.20107 23 1.83696 23 2.5V3C23.2652 3 23.5196 3.10536 23.7071 3.29289C23.8946 3.48043 24 3.73478 24 4V8C24 8.26522 23.8946 8.51957 23.7071 8.70711C23.5196 8.89464 23.2652 9 23 9H18C17.7348 9 17.4804 8.89464 17.2929 8.70711C17.1054 8.51957 17 8.26522 17 8V4C17 3.73478 17.1054 3.48043 17.2929 3.29289C17.4804 3.10536 17.7348 3 18 3V2.5C18 1.83696 18.2634 1.20107 18.7322 0.732233C19.2011 0.263392 19.837 0 20.5 0V0ZM12 11L4 6V8L12 13L16.18 10.39C16.69 10.77 17.32 11 18 11H22V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H15V8C15 8.36 15.06 8.7 15.18 9L12 11ZM20.5 1C20.1022 1 19.7206 1.15804 19.4393 1.43934C19.158 1.72064 19 2.10218 19 2.5V3H22V2.5C22 2.10218 21.842 1.72064 21.5607 1.43934C21.2794 1.15804 20.8978 1 20.5 1Z" />
    </Svg>
  );
};
