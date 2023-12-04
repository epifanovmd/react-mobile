import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookAccountIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 2H12V9L9.5 7.5L7 9V2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2ZM14 12C14.3956 12 14.7822 12.1173 15.1111 12.3371C15.44 12.5568 15.6964 12.8692 15.8478 13.2346C15.9991 13.6001 16.0387 14.0022 15.9616 14.3902C15.8844 14.7781 15.6939 15.1345 15.4142 15.4142C15.1345 15.6939 14.7781 15.8844 14.3902 15.9616C14.0022 16.0387 13.6001 15.9991 13.2346 15.8478C12.8692 15.6964 12.5568 15.44 12.3371 15.1111C12.1173 14.7822 12 14.3956 12 14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12ZM18 20H10V19C10 17.67 12.67 17 14 17C15.33 17 18 17.67 18 19V20Z" />
    </Svg>
  );
};
