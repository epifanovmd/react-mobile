import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BreadSliceOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C17.5 2 22 5.36 22 9.5C22 11.19 21.26 12.75 20 14V22H4V14C2.74 12.75 2 11.19 2 9.5C2 5.36 6.5 2 12 2ZM18 13.14C19.24 12.17 20 10.89 20 9.5C20 6.46 16.42 4 12 4C7.58 4 4 6.46 4 9.5C4 10.89 4.76 12.17 6 13.14V20H18V13.14ZM8 18V14H12V18H8Z" />
    </Svg>
  );
};
