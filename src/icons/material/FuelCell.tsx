import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FuelCellIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 3V5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19V20C4 21.1 4.9 22 6 22H7C8.1 22 9 21.1 9 20V19H15V20C15 21.1 15.9 22 17 22H18C19.1 22 20 21.1 20 20V19C21.1 19 22 18.1 22 17H11V5H8V3H6ZM16 3V5H13V7H22C22 5.9 21.1 5 20 5H18V3H16ZM7 7V11H9L6 17V13H4L7 7ZM13 9V11H22V9H13ZM13 13V15H22V13H13Z" />
    </Svg>
  );
};
