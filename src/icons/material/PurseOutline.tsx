import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PurseOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 11L20 19H3.99995L4.99995 11H19ZM14 3H9.99995L7.99995 5V9H4.69995C4.2786 8.9855 3.86767 9.13285 3.55153 9.41179C3.2354 9.69074 3.03803 10.0801 2.99995 10.5L1.99995 19.1C1.97791 19.3383 2.00524 19.5785 2.08024 19.8057C2.15524 20.0329 2.27629 20.2422 2.43583 20.4205C2.59538 20.5988 2.78998 20.7423 3.00749 20.842C3.22499 20.9417 3.46073 20.9955 3.69995 21H20.3C20.5392 20.9955 20.7749 20.9417 20.9924 20.842C21.2099 20.7423 21.4045 20.5988 21.5641 20.4205C21.7236 20.2422 21.8447 20.0329 21.9197 19.8057C21.9947 19.5785 22.022 19.3383 22 19.1L21 10.5C20.9619 10.0801 20.7645 9.69074 20.4484 9.41179C20.1322 9.13285 19.7213 8.9855 19.3 9H16V5L14 3ZM9.99995 9V5H14V9" />
    </Svg>
  );
};
