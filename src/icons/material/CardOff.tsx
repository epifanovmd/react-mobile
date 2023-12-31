import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.8801 18.68L7.20011 3.99998H20.0001C21.1101 3.99998 22.0001 4.88998 22.0001 5.99998V18C22.0001 18.24 21.9601 18.47 21.8801 18.68ZM20.5601 19.91H20.5701L2.39011 1.72998L1.11011 2.99998L2.65011 4.53998C2.25011 4.89998 2.00011 5.41998 2.00011 5.99998V18C2.00011 19.11 2.90011 20 4.00011 20H18.1101L20.8401 22.73L22.1101 21.46L20.5601 19.91Z" />
    </Svg>
  );
};
