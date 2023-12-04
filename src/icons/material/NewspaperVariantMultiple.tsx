import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NewspaperVariantMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4ZM21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3ZM8 5H13V11H8V5ZM21 15H8V13H21V15ZM21 11H15V9H21V11ZM21 7H15V5H21V7Z" />
    </Svg>
  );
};
