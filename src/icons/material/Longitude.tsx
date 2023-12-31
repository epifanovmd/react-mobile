import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LongitudeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9921 9.35027 20.936 6.81133 19.0623 4.93767C17.1887 3.06402 14.6497 2.00791 12 2ZM9.4 19.6C7.82332 19.0495 6.45689 18.0222 5.49004 16.6605C4.52318 15.2987 4.00378 13.67 4.00378 12C4.00378 10.33 4.52318 8.70125 5.49004 7.33955C6.45689 5.97784 7.82332 4.95055 9.4 4.4C8.16389 6.74336 7.51208 9.35063 7.5 12C7.51208 14.6494 8.16389 17.2566 9.4 19.6ZM12 20C10.358 17.6567 9.48445 14.8613 9.5 12C9.48445 9.13874 10.358 6.34329 12 4C13.642 6.34329 14.5156 9.13874 14.5 12C14.5156 14.8613 13.642 17.6567 12 20ZM14.6 19.6C15.8475 17.261 16.5 14.6509 16.5 12C16.5 9.34913 15.8475 6.73901 14.6 4.4C16.179 4.94735 17.5479 5.97373 18.5159 7.33606C19.4839 8.6984 20.0027 10.3288 20 12C20.0224 13.6758 19.5114 15.3153 18.5406 16.6815C17.5699 18.0477 16.1899 19.0698 14.6 19.6Z" />
    </Svg>
  );
};
