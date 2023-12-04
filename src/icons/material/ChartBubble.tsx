import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartBubbleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.2 11.2C8.97 11.2 10.4 12.63 10.4 14.4C10.4 16.17 8.97 17.6 7.2 17.6C5.43 17.6 4 16.17 4 14.4C4 12.63 5.43 11.2 7.2 11.2ZM14.8 16C15.3304 16 15.8391 16.2107 16.2142 16.5858C16.5893 16.9609 16.8 17.4696 16.8 18C16.8 18.5304 16.5893 19.0391 16.2142 19.4142C15.8391 19.7893 15.3304 20 14.8 20C14.2696 20 13.7609 19.7893 13.3858 19.4142C13.0107 19.0391 12.8 18.5304 12.8 18C12.8 17.4696 13.0107 16.9609 13.3858 16.5858C13.7609 16.2107 14.2696 16 14.8 16ZM15.2 4C15.8303 4 16.4545 4.12416 17.0369 4.36538C17.6192 4.6066 18.1484 4.96017 18.5941 5.40589C19.0398 5.85161 19.3934 6.38076 19.6346 6.96312C19.8758 7.54548 20 8.16966 20 8.8C20 11.45 17.85 13.6 15.2 13.6C13.927 13.6 12.7061 13.0943 11.8059 12.1941C10.9057 11.2939 10.4 10.073 10.4 8.8C10.4 6.15 12.55 4 15.2 4Z" />
    </Svg>
  );
};
