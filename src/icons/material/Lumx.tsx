import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LumxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.3501 1.75L20.1301 9.53L13.7701 15.89L12.3501 14.47L17.3001 9.53L10.9401 3.16L12.3501 1.75ZM15.8901 9.53L14.4701 10.94L10.2301 6.7L5.28012 11.65L3.87012 10.23L10.2301 3.87L15.8901 9.53ZM10.2301 8.11L11.6501 9.53L6.70012 14.47L13.0601 20.84L11.6501 22.25L3.87012 14.47L10.2301 8.11ZM8.11012 14.47L9.53012 13.06L13.7701 17.3L18.7201 12.35L20.1301 13.77L13.7701 20.13L8.11012 14.47Z" />
    </Svg>
  );
};
