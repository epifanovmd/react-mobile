import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const QiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.09 6.5593V14.6393C12.09 14.7193 12 14.7893 11.94 14.7893C9.62003 14.7893 7.75003 12.9093 7.75003 10.5993C7.75003 8.2793 9.62003 6.3993 11.94 6.3993C12 6.3993 12.09 6.4693 12.09 6.5593ZM12.09 17.8593V20.2893C12.06 21.6893 13.12 22.8693 14.5 22.9993C14.66 22.9993 14.78 22.8893 14.79 22.7293V4.4693C14.78 4.2993 14.68 4.1493 14.5 4.0893C10.92 2.6693 6.86003 4.4393 5.44003 8.0293C4.00003 11.6293 5.79003 15.6893 9.38003 17.1093C10.16 17.4193 11 17.5793 11.81 17.5993C11.95 17.5893 12.07 17.7093 12.08 17.8693L12.09 17.8593ZM16.19 5.4993V15.7193C16.19 15.9993 16.19 16.1993 16.46 15.9993C19.42 13.4993 19.81 9.0893 17.33 6.1293C17.07 5.8093 16.77 5.4993 16.46 5.2593C16.19 5.0493 16.19 5.2593 16.19 5.5293V5.4993ZM14.79 2.4293C14.79 1.6593 15.42 1.0293 16.19 1.0293C16.96 1.0293 17.59 1.6593 17.59 2.4293C17.59 3.1993 16.96 3.8293 16.19 3.8293C15.42 3.8293 14.79 3.1993 14.79 2.4293Z" />
    </Svg>
  );
};
