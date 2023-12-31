import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NullIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 1.99969C13.8501 1.99969 15.5501 2.77969 16.9001 4.09969L18.6001 1.92969L20.1801 3.15969L18.2001 5.67969C19.3301 7.40969 20.0001 9.59969 20.0001 11.9997C20.0001 17.4997 16.4201 21.9997 12.0001 21.9997C10.1501 21.9997 8.45007 21.2197 7.10007 19.8997L5.40007 22.0697L3.82007 20.8397L5.80007 18.3197C4.67007 16.5897 4.00007 14.3997 4.00007 11.9997C4.00007 6.49969 7.58007 1.99969 12.0001 1.99969ZM12.0001 3.99969C8.69007 3.99969 6.00007 7.57969 6.00007 11.9997C6.00007 13.7297 6.41007 15.3297 7.11007 16.6397L15.6701 5.66969C14.6601 4.61969 13.3801 3.99969 12.0001 3.99969ZM12.0001 19.9997C15.3101 19.9997 18.0001 16.4197 18.0001 11.9997C18.0001 10.2697 17.5901 8.66969 16.8901 7.35969L8.33007 18.3297C9.34007 19.3797 10.6201 19.9997 12.0001 19.9997Z" />
    </Svg>
  );
};
