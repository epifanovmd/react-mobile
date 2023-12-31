import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.39 14.0402C15.39 12.6202 14.24 11.4702 12.82 11.4702C11.41 11.4702 10.26 12.6202 10.26 14.0402C10.26 15.4502 11.41 16.6002 12.82 16.6002C14.24 16.6002 15.39 15.4502 15.39 14.0402ZM17.1 14.0402C17.1 16.4002 15.18 18.3102 12.82 18.3102C11.19 18.3102 9.77 17.3902 9.05 16.0402C8.33 17.3902 6.91 18.3102 5.28 18.3102C2.94 18.3102 1.04 16.4302 1 14.1102V7.00018C1 6.56018 1.39 6.18018 1.86 6.18018C2.33 6.18018 2.7 6.56018 2.71 7.00018V10.6202C3.43 10.0802 4.32 9.76018 5.28 9.76018C6.91 9.76018 8.33 10.6802 9.05 12.0302C9.77 10.6802 11.19 9.76018 12.82 9.76018C15.18 9.76018 17.1 11.6802 17.1 14.0402ZM7.84 14.0402C7.84 12.6202 6.69 11.4702 5.28 11.4702C3.86 11.4702 2.71 12.6202 2.71 14.0402C2.71 15.4502 3.86 16.6002 5.28 16.6002C6.69 16.6002 7.84 15.4502 7.84 14.0402ZM22.84 16.9602C22.95 17.1202 23 17.3002 23 17.4702C23 17.7302 22.88 18.0002 22.66 18.1502C22.5 18.2602 22.33 18.3202 22.15 18.3202C21.9 18.3202 21.65 18.2102 21.5 18.0002L19.59 15.4702L17.7 18.0002C17.53 18.2102 17.28 18.3202 17.03 18.3202C16.85 18.3202 16.67 18.2602 16.5 18.1502C16.29 18.0002 16.17 17.7202 16.17 17.4602C16.17 17.2902 16.23 17.1102 16.33 16.9602L18.5 14.0402L16.33 11.1102C16.22 10.9602 16.17 10.7902 16.17 10.6102C16.17 10.3502 16.29 10.1002 16.5 9.93018C16.89 9.65018 17.41 9.72018 17.7 10.0902L19.59 12.6102L21.5 10.0902C21.76 9.72018 22.29 9.65018 22.66 9.93018C22.89 10.1002 23 10.3602 23 10.6302C23 10.8002 22.95 10.9702 22.84 11.1102L20.66 14.0402L22.84 16.9602Z" />
    </Svg>
  );
};
