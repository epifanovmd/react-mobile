import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MessageBulletedOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.27 1.73047L0 3.00047L2 5.00047V22.0005L6 18.0005H15L20.73 23.7305L22 22.4605L1.27 1.73047ZM8 14.0005H6V12.0005H8V14.0005ZM6 11.0005V9.00047L8 11.0005H6ZM20 2.00047H4.08L10 7.92047V6.00047H18V8.00047H10.08L11.08 9.00047H18V11.0005H13.08L20.07 18.0005C21.14 17.9505 22 17.0805 22 16.0005V4.00047C22 3.47004 21.7893 2.96133 21.4142 2.58626C21.0391 2.21118 20.5304 2.00047 20 2.00047Z" />
    </Svg>
  );
};
