import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MotionSensorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 0.199219C9 0.199219 8.2 0.999219 8.2 1.99922C8.2 2.99922 9 3.79922 10 3.79922C11 3.79922 11.8 2.99922 11.8 1.99922C11.8 0.999219 11 0.199219 10 0.199219ZM15.67 0.999219C15.67 2.94326 16.4423 4.80767 17.8169 6.18231C19.1915 7.55695 21.056 8.32922 23 8.32922V6.99922C21.4087 6.99922 19.8826 6.36708 18.7574 5.24186C17.6321 4.11664 17 2.59052 17 0.999219H15.67ZM18.33 0.999219C18.33 3.57922 20.42 5.66922 23 5.66922V4.32922C21.16 4.32922 19.67 2.83922 19.67 0.999219H18.33ZM21 0.999219C21 1.52965 21.2107 2.03836 21.5858 2.41343C21.9609 2.78851 22.4696 2.99922 23 2.99922V0.999219H21ZM7.92 4.02922C7.75 4.02922 7.58 4.05922 7.42 4.10922L2 5.79922V10.9992H3.8V7.32922L5.91 6.66922L2 21.9992H3.8L6.67 13.8892L9 16.9992V21.9992H10.8V15.5892L8.31 11.0492L9.04 8.17922L10.12 9.99922H15V8.19922H11.38L9.38 4.86922C9.08 4.36922 8.54 4.02922 7.92 4.02922Z" />
    </Svg>
  );
};
