import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD12Icon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2L1.5 9.64L5.5 22H18.5L22.5 9.64L12 2ZM10.5 17H8.89V10.89L7 11.47V10.19L10.31 9H10.5V17ZM17 17H11.66V15.91C11.66 15.91 15.23 12.45 15.23 11.4C15.23 10.12 14.18 10.25 14.18 10.25C13.5 10.3 13 10.87 13 11.55H11.44C11.5 10.09 12.72 8.94 14.27 9C16.74 9 16.77 10.85 16.77 11.3C16.77 13.07 13.58 15.77 13.58 15.77L17 15.75V17Z" />
    </Svg>
  );
};
