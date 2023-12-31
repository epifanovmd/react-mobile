import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookAccountOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 2C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18ZM18 4H13V9L10.5 6.7L8 9V4H6V20H18V4ZM13 11C13.3956 11 13.7822 11.1173 14.1111 11.3371C14.44 11.5568 14.6964 11.8692 14.8478 12.2346C14.9991 12.6001 15.0387 13.0022 14.9616 13.3902C14.8844 13.7781 14.6939 14.1345 14.4142 14.4142C14.1345 14.6939 13.7781 14.8844 13.3902 14.9616C13.0022 15.0387 12.6001 14.9991 12.2346 14.8478C11.8692 14.6964 11.5568 14.44 11.3371 14.1111C11.1173 13.7822 11 13.3956 11 13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11ZM17 19H9V18C9 16.67 11.67 16 13 16C14.33 16 17 16.67 17 18V19Z" />
    </Svg>
  );
};
