import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BagSuitcaseOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 4.77L3.28 3.5L21 21.22L19.73 22.5L18 20.76C17.71 20.93 17.38 21 17.03 21C17.03 21.58 16.56 22 16 22C15.5 22 15 21.58 15 21H9C9 21.58 8.5 22 8 22C7.44 22 6.97 21.58 6.97 21C5.89 21 5 20.13 5 19V7.78L2 4.77ZM9.5 18H8V10.78L6.97 9.74V19H16.23L15.25 18H14.5V17.26L12.75 15.5V18H11.25V14L9.5 12.28V18ZM12.75 9V10.43L11.32 9H12.75ZM14.5 9H16V13.67L14.5 12.17V9ZM17.03 6C18.11 6 19 6.88 19 8V16.68L17.03 14.7V8H10.33L8.31 6H9V3C9 2.42 9.46 2 10 2H14C14.54 2 15 2.42 15 3V6H17.03ZM10.5 3.5V6H13.5V3.5H10.5Z" />
    </Svg>
  );
};
