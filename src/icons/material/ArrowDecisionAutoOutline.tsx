import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowDecisionAutoOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 15V12C18.5 12 14.5 12.16 14.05 16.2C15.61 16.75 16.43 18.47 15.88 20.03C15.33 21.59 13.61 22.41 12.05 21.86C10.5 21.3 9.67 19.59 10.22 18.03C10.5 17.17 11.2 16.5 12.05 16.2C12.34 12.61 15.4 9.88 19 10V7L23 11L19 15ZM14 19C14 18.7348 13.8946 18.4804 13.7071 18.2929C13.5196 18.1054 13.2652 18 13 18C12.7348 18 12.4804 18.1054 12.2929 18.2929C12.1054 18.4804 12 18.7348 12 19C12 19.2652 12.1054 19.5196 12.2929 19.7071C12.4804 19.8946 12.7348 20 13 20C13.2652 20 13.5196 19.8946 13.7071 19.7071C13.8946 19.5196 14 19.2652 14 19ZM12 11.12C12.58 10.46 13.25 9.89 14 9.43V5H17L13 1L9 5H12V11.12ZM7.2 6H5.2L2 15H3.9L4.6 13H7.8L8.5 15H10.4L7.2 6ZM5.05 11.65L6.2 8L7.35 11.65H5.05Z" />
    </Svg>
  );
};
