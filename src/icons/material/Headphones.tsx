import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadphonesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 1C7 1 3 5 3 10V17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20H9V12H5V10C5 8.14348 5.7375 6.36301 7.05025 5.05025C8.36301 3.7375 10.1435 3 12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V12H15V20H18C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17V10C21 5 16.97 1 12 1Z" />
    </Svg>
  );
};
