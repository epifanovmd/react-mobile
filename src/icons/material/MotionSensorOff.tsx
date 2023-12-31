import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MotionSensorOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.4 8.19922H15V9.99922H13.2L11.4 8.19922ZM19.67 0.999219H18.33C18.33 3.57922 20.42 5.66922 23 5.66922V4.32922C21.16 4.32922 19.67 2.83922 19.67 0.999219ZM21 0.999219C21 2.10922 21.9 2.99922 23 2.99922V0.999219H21ZM17 0.999219H15.67C15.67 5.04922 18.95 8.32922 23 8.32922V6.99922C19.69 6.99922 17 4.30922 17 0.999219ZM9.99999 3.79922C11 3.79922 11.8 2.99922 11.8 1.99922C11.8 0.999219 11 0.199219 9.99999 0.199219C8.99999 0.199219 8.19999 0.999219 8.19999 1.99922C8.19999 2.99922 8.99999 3.79922 9.99999 3.79922ZM2.38999 1.72922L1.10999 2.99922L3.45999 5.34922L1.99999 5.79922V10.9992H3.79999V7.32922L5.04999 6.93922L5.67999 7.56922L1.99999 21.9992H3.79999L6.66999 13.8892L8.99999 16.9992V21.9992H10.8V15.5892L8.30999 11.0492L8.49999 10.3692L20.84 22.7292L22.11 21.4592L2.38999 1.72922ZM9.37999 4.86922C9.07999 4.36922 8.53999 4.02922 7.91999 4.02922C7.74999 4.02922 7.57999 4.05922 7.41999 4.10922L7.33999 4.13922L11.35 8.14922L9.37999 4.86922Z" />
    </Svg>
  );
};
