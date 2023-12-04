import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 4.27L2.47 5.74C2.18 6.08 2 6.5 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H15.73L18.73 22L20 20.72L2.28 3L1 4.27ZM4 17V7.27L5 8.27V10H6.73L8 11.27V13H9.73L10.73 14H8V16H12.73L13.73 17H4ZM5 11H7V13H5V11ZM17 11H19V13H17V11ZM19 10H17V8H19V10ZM14 11H16V13H14.83L14 12.17V11ZM13 10H11.83L11 9.17V8H13V10ZM22 7V17C22 17.86 21.45 18.58 20.7 18.87L18.83 17H20V7H8.83L6.83 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7ZM16 10H14V8H16V10Z" />
    </Svg>
  );
};
