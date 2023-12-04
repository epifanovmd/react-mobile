import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BroomIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.3601 2.72021L20.7801 4.14021L15.0601 9.85021C16.1301 11.3902 16.2801 13.2402 15.3801 14.4402L9.0601 8.12021C10.2601 7.22021 12.1101 7.37021 13.6501 8.44021L19.3601 2.72021ZM5.9301 17.5702C3.9201 15.5602 2.6901 13.1602 2.3501 10.9202L7.2301 8.83021L14.6701 16.2702L12.5801 21.1502C10.3401 20.8102 7.9401 19.5802 5.9301 17.5702Z" />
    </Svg>
  );
};
