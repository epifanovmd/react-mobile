import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneNfcIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 16V18C2.65661 18 3.30679 18.1293 3.91342 18.3806C4.52005 18.6319 5.07124 19.0002 5.53553 19.4645C5.99983 19.9288 6.36812 20.48 6.6194 21.0866C6.87067 21.6932 7 22.3434 7 23H9C9 21.1435 8.2625 19.363 6.94975 18.0503C5.63699 16.7375 3.85652 16 2 16ZM2 20V23H5C5 22.2044 4.68393 21.4413 4.12132 20.8787C3.55871 20.3161 2.79565 20 2 20ZM2 12V14C4.38695 14 6.67613 14.9482 8.36396 16.636C10.0518 18.3239 11 20.6131 11 23H13C13 16.92 8.08 12 2 12ZM17 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V10.37C5.69 10.53 6.36 10.74 7 11V5H17V18H13.97C14.5 19.25 14.81 20.59 14.92 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1Z" />
    </Svg>
  );
};
