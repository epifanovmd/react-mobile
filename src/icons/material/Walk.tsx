import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WalkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.12 9.99922H19V8.19922H15.38L13.38 4.86922C13.08 4.36922 12.54 4.02922 11.92 4.02922C11.74 4.02922 11.58 4.05922 11.42 4.10922L6 5.79922V10.9992H7.8V7.32922L9.91 6.66922L6 21.9992H7.8L10.67 13.8892L13 16.9992V21.9992H14.8V15.5892L12.31 11.0492L13.04 8.17922L14.12 9.99922ZM14 3.79922C15 3.79922 15.8 2.99922 15.8 1.99922C15.8 0.999219 15 0.199219 14 0.199219C13 0.199219 12.2 0.999219 12.2 1.99922C12.2 2.99922 13 3.79922 14 3.79922Z" />
    </Svg>
  );
};
